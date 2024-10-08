"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicFacultyRoutes = void 0;
const express_1 = __importDefault(require("express"));
const academicfaculty_controller_1 = require("./academicfaculty.controller");
const academicFaculty_validation_1 = require("./academicFaculty.validation");
const validateRequest_1 = __importDefault(require("../../../middlewares/validateRequest"));
const router = express_1.default.Router();
router.post('/create-faculty', (0, validateRequest_1.default)(academicFaculty_validation_1.AcademicFacultyValidation.createAcademicFacultyZodSchema), academicfaculty_controller_1.AcademicFacultyController.createFaculty);
router.get('/:id', academicfaculty_controller_1.AcademicFacultyController.getSingleFaculty);
router.patch('/:id', (0, validateRequest_1.default)(academicFaculty_validation_1.AcademicFacultyValidation.updateFacultyZodSchema), academicfaculty_controller_1.AcademicFacultyController.updateFaculty);
router.delete('/:id', academicfaculty_controller_1.AcademicFacultyController.deleteFaculty);
router.get('/', academicfaculty_controller_1.AcademicFacultyController.getAllFaculties);
exports.AcademicFacultyRoutes = router;
