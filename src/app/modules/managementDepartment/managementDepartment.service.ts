import { SortOrder } from 'mongoose';
import { paginationHelpers } from '../../../helpers/paginatinHelpers';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { managementSearchableFields } from './managementDepartment.constant';
import {
  IManagement,
  IManagementFilters,
} from './managementDepartment.interface';
import { Management } from './managementDepartment.model';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';

const createManagementDepartment = async (
  data: IManagement,
): Promise<IManagement | null> => {
  const result = await Management.create(data);
  return result;
};

// get managements
const getAllManagements = async (
  filters: IManagementFilters,
  paginationOptions: IPaginationOptions,
): Promise<IGenericResponse<IManagement[]>> => {
  // const { page = 1, limit = 10 } = paginationOptions;
  const { searchTerm, ...filtersData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: managementSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const sortConditions: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  //
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Management.find(whereConditions)
    // .populate('managementDepartment')
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Management.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

// get single managements
const getSingleManagement = async (id: string): Promise<IManagement | null> => {
  const result = await Management.findById(id);
  return result;
};

// update management
const updateManagement = async (
  id: string,
  payload: IManagement,
): Promise<IManagement | null> => {
  const isExist = await Management.findOne({ _id: id });

  if (!isExist) {
    throw new ApiError(
      httpStatus.NOT_FOUND,
      'The info is not exist that you want to update',
    );
  }
  const result = await Management.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

// delete managements
const deleteManagement = async (id: string): Promise<IManagement | null> => {
  const result = await Management.findByIdAndDelete(id);
  return result;
};

export const ManagementDepartmenService = {
  createManagementDepartment,
  getAllManagements,
  getSingleManagement,
  updateManagement,
  deleteManagement,
};
