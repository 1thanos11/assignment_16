"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const success_response_js_1 = require("../../common/response/success.response.js");
const auth_service_js_1 = __importDefault(require("./auth.service.js"));
const auth_validation_js_1 = require("./auth.validation.js");
const validation_middleware_js_1 = require("../../middleware/validation.middleware.js");
const router = (0, express_1.Router)();
router.post("/signup", (0, validation_middleware_js_1.validate)(auth_validation_js_1.signupSchema), async (req, res, next) => {
    const { username, email, password, confirmPassword, phone } = req.body;
    const result = await auth_service_js_1.default.signup({
        username,
        email,
        password,
        confirmPassword,
        phone,
    });
    return (0, success_response_js_1.successResponse)({ res, status: 201, data: result });
});
exports.default = router;
