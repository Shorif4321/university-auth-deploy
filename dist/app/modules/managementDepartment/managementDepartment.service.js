"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagementDepartmenService = void 0;
const paginatinHelpers_1 = require("../../../helpers/paginatinHelpers");
const managementDepartment_constant_1 = require("./managementDepartment.constant");
const managementDepartment_model_1 = require("./managementDepartment.model");
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const createManagementDepartment = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield managementDepartment_model_1.Management.create(data);
    return result;
});
// get managements
const getAllManagements = (filters, paginationOptions) => __awaiter(void 0, void 0, void 0, function* () {
    // const { page = 1, limit = 10 } = paginationOptions;
    const { searchTerm } = filters, filtersData = __rest(filters, ["searchTerm"]);
    const { page, limit, skip, sortBy, sortOrder } = paginatinHelpers_1.paginationHelpers.calculatePagination(paginationOptions);
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            $or: managementDepartment_constant_1.managementSearchableFields.map(field => ({
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
    const sortConditions = {};
    if (sortBy && sortOrder) {
        sortConditions[sortBy] = sortOrder;
    }
    //
    const whereConditions = andConditions.length > 0 ? { $and: andConditions } : {};
    const result = yield managementDepartment_model_1.Management.find(whereConditions)
        // .populate('managementDepartment')
        .sort(sortConditions)
        .skip(skip)
        .limit(limit);
    const total = yield managementDepartment_model_1.Management.countDocuments(whereConditions);
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
// get single managements
const getSingleManagement = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield managementDepartment_model_1.Management.findById(id);
    return result;
});
// update management
const updateManagement = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield managementDepartment_model_1.Management.findOne({ _id: id });
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'The info is not exist that you want to update');
    }
    const result = yield managementDepartment_model_1.Management.findByIdAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
// delete managements
const deleteManagement = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield managementDepartment_model_1.Management.findByIdAndDelete(id);
    return result;
});
exports.ManagementDepartmenService = {
    createManagementDepartment,
    getAllManagements,
    getSingleManagement,
    updateManagement,
    deleteManagement,
};
