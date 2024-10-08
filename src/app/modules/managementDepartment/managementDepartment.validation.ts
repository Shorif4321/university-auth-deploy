import { z } from 'zod';

const createManagementZodScema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is Required zod',
    }),
  }),
});

const updateManagementZodScema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required for update',
    }),
  }),
});

export const ManagementDepartmentValidation = {
  createManagementZodScema,
  updateManagementZodScema,
};
