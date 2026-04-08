"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exceptions_1 = require("../../common/exceptions");
const repository_1 = require("../../DB/repository");
const security_service_js_1 = require("../../common/services/security.service.js");
const email_1 = require("../../common/utils/email");
class AuthService {
    userRepository;
    securityService;
    constructor() {
        this.userRepository = new repository_1.UserRepository();
        this.securityService = new security_service_js_1.SecurityService();
    }
    signup = async (inputs) => {
        const { username, email, password, phone } = inputs;
        const isUserExist = await this.userRepository.findOne({
            filter: { email: inputs.email },
            projection: "email",
            options: { lean: true },
        });
        if (isUserExist) {
            throw new exceptions_1.ConflictException("email already exist");
        }
        const user = await this.userRepository.createOne({
            data: {
                username,
                email,
                password: await this.securityService.generateHash({ data: password }),
                phone: phone
                    ? await this.securityService.encrypt({ plaintext: phone })
                    : undefined,
            },
        });
        email_1.sendMailEvent.emit("sendMail", {
            to: email,
            html: (0, email_1.emailTemplate)({ title: "verify account", code: 123 }),
        });
        return user.toJSON();
    };
}
exports.default = new AuthService();
