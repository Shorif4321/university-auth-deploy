import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { ManagementDepartmenService } from './managementDepartment.service';
import pick from '../../../shared/pick';
import { managementFilterableFields } from './managementDepartment.constant';
import { paginationFields } from '../../../constants/pagination';

const createManagementDepartment: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;

    const result =
      await ManagementDepartmenService.createManagementDepartment(data);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Management Department create Successfully!',
      data: result,
    });
  },
);

const getAllManagements: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, managementFilterableFields);
    const paginamtionOptions = pick(req.query, paginationFields);
    const result = await ManagementDepartmenService.getAllManagements(
      filters,
      paginamtionOptions,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'All Management Departments head are here!',
      data: result,
    });
  },
);

const getSingleManagement: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await ManagementDepartmenService.getSingleManagement(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Management Department one',
      data: result,
    });
  },
);

const updateManagement: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const updatedData = req.body;
    const result = await ManagementDepartmenService.updateManagement(
      id,
      updatedData,
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Management Department one',
      data: result,
    });
  },
);

const deleteManagement: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    const result = await ManagementDepartmenService.deleteManagement(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Management Department Deleted',
      data: result,
    });
  },
);

export const ManagementDepartmentController = {
  createManagementDepartment,
  getAllManagements,
  getSingleManagement,
  updateManagement,
  deleteManagement,
};
