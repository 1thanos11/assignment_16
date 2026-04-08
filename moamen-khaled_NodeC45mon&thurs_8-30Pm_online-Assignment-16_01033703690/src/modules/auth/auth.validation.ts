import z from "zod";
import { generalValidationFields } from "../../common/validation/general.validation.js";

export const loginSchema = {
  body: z.strictObject({
    email: generalValidationFields.email,
    password: generalValidationFields.password,
  }),
};

export const signupSchema = {
  body: loginSchema.body
    .safeExtend({
      username: generalValidationFields.username,
      confirmPassword: generalValidationFields.confirmPassword,
      phone: generalValidationFields.phone.optional(),
    })
    .superRefine((data, ctx) => {
      if (data.password !== data.confirmPassword) {
        ctx.addIssue({
          path: ["confirm password"],
          message: "invalid confirm password ",
          code: "custom",
        });
      }
    }),
  // .refine(
  //   (data) => {
  //     return data.password === data.confirmPassword;
  //   },
  //   { error: "invalid confirm password" },
  // ),// if you need to make one thing
};
