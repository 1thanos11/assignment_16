import { SignupDto } from "./auth.dto.js";
import { IUser } from "../../common/interfaces";
import { ConflictException } from "../../common/exceptions";
import { UserRepository } from "../../DB/repository";
import { SecurityService } from "../../common/services/security.service.js";
import { emailTemplate, sendMailEvent } from "../../common/utils/email";

class AuthService {
  private userRepository: UserRepository;
  private readonly securityService: SecurityService;
  constructor() {
    this.userRepository = new UserRepository();
    this.securityService = new SecurityService();
  }
  public signup = async (inputs: SignupDto): Promise<IUser> => {
    const { username, email, password, phone } = inputs;
    const isUserExist = await this.userRepository.findOne({
      filter: { email: inputs.email },
      projection: "email",
      options: { lean: true },
    });
    if (isUserExist) {
      throw new ConflictException("email already exist");
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
    sendMailEvent.emit("sendMail", {
      to: email,
      html: emailTemplate({ title: "verify account", code: 123 }),
    });

    return user.toJSON();
  };
}

export default new AuthService();
