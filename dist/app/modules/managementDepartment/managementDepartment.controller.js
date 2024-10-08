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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagementDepartmentController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const managementDepartment_service_1 = require("./managementDepartment.service");
const pick_1 = __importDefault(require("../../../shared/pick"));
const managementDepartment_constant_1 = require("./managementDepartment.constant");
const pagination_1 = require("../../../constants/pagination");
const createManagementDepartment = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result = yield managementDepartment_service_1.ManagementDepartmenService.createManagementDepartment(data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Management Department create Successfully!',
        data: result,
    });
}));
const getAllManagements = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, managementDepartment_constant_1.managementFilterableFields);
    const paginamtionOptions = (0, pick_1.default)(req.query, pagination_1.paginationFields);
    const result = yield managementDepartment_service_1.ManagementDepartmenService.getAllManagements(filters, paginamtionOptions);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'All Management Departments head are here!',
        data: result,
    });
}));
const getSingleManagement = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield managementDepartment_service_1.ManagementDepartmenService.getSingleManagement(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Management Department one',
        data: result,
    });
}));
const updateManagement = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updatedData = req.body;
    const result = yield managementDepartment_service_1.ManagementDepartmenService.updateManagement(id, updatedData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Management Department one',
        data: result,
    });
}));
const deleteManagement = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield managementDepartment_service_1.ManagementDepartmenService.deleteManagement(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Management Department Deleted',
        data: result,
    });
}));
exports.ManagementDepartmentController = {
    createManagementDepartment,
    getAllManagements,
    getSingleManagement,
    updateManagement,
    deleteManagement,
};
