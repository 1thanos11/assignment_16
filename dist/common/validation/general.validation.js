"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generalValidationFields = void 0;
const zod_1 = __importDefault(require("zod"));
exports.generalValidationFields = {
    username: zod_1.default
        .string({ error: "username must be string" })
        .min(1, { error: "username can't be less than 1" })
        .max(15, { error: "username can't be exceed 15" }),
    confirmPassword: zod_1.default.string(),
    email: zod_1.default.email({ error: "enter valid email format" }),
    password: zod_1.default.string({ error: "password must be string" }),
    phone: zod_1.default.string(),
};
