"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const student_constant_1 = require("../student/student.constant");
const faculty_constant_1 = require("../faculty/faculty.constant");
// req- validation
// body - object / data in object also a object
// data - object
const createUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        password: zod_1.z.string().optional(),
        student: zod_1.z.object({
            name: zod_1.z.object({
                firstName: zod_1.z.string({
                    required_error: 'First name is Required',
                }),
                middleName: zod_1.z
                    .string({
                    required_error: 'Middle name is Required',
                })
                    .optional(),
                lastName: zod_1.z.string({
                    required_error: 'Last name is Required',
                }),
            }),
            gender: zod_1.z.enum([...student_constant_1.gender], {
                required_error: 'Gender is required',
            }),
            dateOfBirth: zod_1.z.string({
                required_error: 'Data of birth is required',
            }),
            email: zod_1.z
                .string({
                required_error: 'Email is Requirede',
            })
                .email(),
            contactNo: zod_1.z.string({
                required_error: 'Contact Number is Requirede',
            }),
            emergencyContactNo: zod_1.z.string({
                required_error: 'Emmergency Contact Number is Requirede',
            }),
            bloodGroup: zod_1.z
                .enum([...student_constant_1.bloodGroup], {
                required_error: 'Blood Group is required',
            })
                .optional(),
            presentAddress: zod_1.z.string({
                required_error: 'Present Address is Requirede',
            }),
            permanentAddress: zod_1.z.string({
                required_error: 'Parmanent Address is Requirede',
            }),
            academicSemester: zod_1.z.string({
                required_error: 'Academic Semester is Requirede',
            }),
            academicDepartment: zod_1.z.string({
                required_error: 'Academic Department is Requirede',
            }),
            academicFaculty: zod_1.z.string({
                required_error: 'Academic Faculty is Requirede',
            }),
            guardian: zod_1.z.object({
                fatherName: zod_1.z.string({
                    required_error: 'Father name is Required',
                }),
                fatherOccupation: zod_1.z.string({
                    required_error: 'Father Occupation is Required',
                }),
                fatherContactNo: zod_1.z.string({
                    required_error: 'Father ContactNo is Required',
                }),
                motherName: zod_1.z.string({
                    required_error: 'Mother name is Required',
                }),
                motherOccupation: zod_1.z.string({
                    required_error: 'Mother Occupation is Required',
                }),
                motherContactNo: zod_1.z.string({
                    required_error: 'Mother ContactNo is Required',
                }),
                address: zod_1.z.string({
                    required_error: 'Guardian Address is Required',
                }),
            }),
            localGuardian: zod_1.z.object({
                name: zod_1.z.string({
                    required_error: 'Local Guardian name is Required',
                }),
                occupation: zod_1.z.string({
                    required_error: 'Local Guardian Occupation is Required',
                }),
                contactNo: zod_1.z.string({
                    required_error: 'Local Guardian Contact Nomber is Required',
                }),
                address: zod_1.z.string({
                    required_error: 'Local Guardian Address is Required',
                }),
            }),
            profileImage: zod_1.z.string().optional(),
        }),
    }),
});
const createFacultyZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        password: zod_1.z.string().optional(),
        faculty: zod_1.z.object({
            name: zod_1.z.object({
                firstName: zod_1.z.string({
                    required_error: 'First name is Required',
                }),
                middleName: zod_1.z
                    .string({
                    required_error: 'Middle name is Required',
                })
                    .optional(),
                lastName: zod_1.z.string({
                    required_error: 'Last name is Required',
                }),
            }),
            gender: zod_1.z.enum([...faculty_constant_1.facultyGender], {
                required_error: 'Gender is required',
            }),
            dateOfBirth: zod_1.z.string({
                required_error: 'Data of birth is required',
            }),
            email: zod_1.z
                .string({
                required_error: 'Email is Requirede',
            })
                .email(),
            contactNo: zod_1.z.string({
                required_error: 'Contact Number is Requirede',
            }),
            emergencyContactNo: zod_1.z.string({
                required_error: 'Emmergency Contact Number is Requirede',
            }),
            bloodGroup: zod_1.z
                .enum([...faculty_constant_1.facultyBloodGroup], {
                required_error: 'Blood Group is required',
            })
                .optional(),
            presentAddress: zod_1.z.string({
                required_error: 'Present Address is Requirede',
            }),
            permanentAddress: zod_1.z.string({
                required_error: 'Parmanent Address is Requirede',
            }),
            academicDepartment: zod_1.z.string({
                required_error: 'Academic Department is Requirede',
            }),
            academicFaculty: zod_1.z.string({
                required_error: 'Academic Faculty is Requirede',
            }),
            designation: zod_1.z.string({
                required_error: 'Designation is Required',
            }),
            profileImage: zod_1.z.string().optional(),
        }),
    }),
});
const createAdminZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        password: zod_1.z.string().optional(),
        admin: zod_1.z.object({
            name: zod_1.z.object({
                firstName: zod_1.z.string({
                    required_error: 'First name is Required',
                }),
                lastName: zod_1.z.string({
                    required_error: 'Last name is Required',
                }),
                middleName: zod_1.z
                    .string({
                    required_error: 'Middle name is Required',
                })
                    .optional(),
            }),
            dateOfBirth: zod_1.z.string({
                required_error: 'Data of birth is required',
            }),
            gender: zod_1.z.enum([...faculty_constant_1.facultyGender], {
                required_error: 'Gender is required',
            }),
            bloodGroup: zod_1.z
                .enum([...faculty_constant_1.facultyBloodGroup], {
                required_error: 'Blood Group is required',
            })
                .optional(),
            email: zod_1.z
                .string({
                required_error: 'Email is Requirede',
            })
                .email(),
            contactNo: zod_1.z.string({
                required_error: 'Contact Number is Requirede',
            }),
            emergencyContactNo: zod_1.z.string({
                required_error: 'Emmergency Contact Number is Requirede',
            }),
            presentAddress: zod_1.z.string({
                required_error: 'Present Address is Requirede',
            }),
            permanentAddress: zod_1.z.string({
                required_error: 'Parmanent Address is Requirede',
            }),
            managementDepartment: zod_1.z.string({
                required_error: 'Management Department is Requirede',
            }),
            designation: zod_1.z.string({
                required_error: 'Designation is Required',
            }),
            profileImage: zod_1.z.string().optional(),
        }),
    }),
});
// const createAdminZodSchema = z.object({
//   body: z.object({
//     password: z.string().optional(),
//     admin: z.object({
//       name: z.object({
//         firstName: z.string({
//           required_error: 'First name is Required',
//         }),
//         middleName: z
//           .string({
//             required_error: 'Middle name is Required',
//           })
//           .optional(),
//         lastName: z.string({
//           required_error: 'Last name is Required',
//         }),
//       }),
//       gender: z.enum([...] as [string, ...string[]], {
//         required_error: 'Gender is required',
//       }),
//       dateOfBirth: z.string({
//         required_error: 'Data of birth is required',
//       }),
//       email: z
//         .string({
//           required_error: 'Email is Requirede',
//         })
//         .email(),
//       contactNo: z.string({
//         required_error: 'Contact Number is Requirede',
//       }),
//       emergencyContactNo: z.string({
//         required_error: 'Emmergency Contact Number is Requirede',
//       }),
//       bloodGroup: z
//         .enum([...] as [string, ...string[]], {
//           required_error: 'Blood Group is required',
//         })
//         .optional(),
//       presentAddress: z.string({
//         required_error: 'Present Address is Requirede',
//       }),
//       permanentAddress: z.string({
//         required_error: 'Parmanent Address is Requirede',
//       }),
//       academicDepartment: z.string({
//         required_error: 'Academic Department is Requirede',
//       }),
//       academicFaculty: z.string({
//         required_error: 'Academic Faculty is Requirede',
//       }),
//       profileImage: z.string().optional(),
//     }),
//   }),
// });
// async await for req async await
// await createUserZodSchema.parseAsync(req)
exports.UserValidation = {
    createUserZodSchema,
    createFacultyZodSchema,
    createAdminZodSchema,
};
