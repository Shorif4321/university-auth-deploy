import express from 'express';
import validateRequest from '../../../middlewares/validateRequest';
import { ManagementDepartmentValidation } from './managementDepartment.validation';
import { ManagementDepartmentController } from './managementDepartment.controller';
const router = express.Router();

router.post(
  '/create-management',
  validateRequest(ManagementDepartmentValidation.createManagementZodScema),
  ManagementDepartmentController.createManagementDepartment,
);

router.get('/:id', ManagementDepartmentController.getSingleManagement);
router.get('/', ManagementDepartmentController.getAllManagements);

router.patch(
  '/:id',
  validateRequest(ManagementDepartmentValidation.updateManagementZodScema),
  ManagementDepartmentController.updateManagement,
);

router.delete('/:id', ManagementDepartmentController.deleteManagement);

export const ManagementDepartmentRoute = router;
