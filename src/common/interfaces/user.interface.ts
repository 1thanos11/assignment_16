import { GenderEnum, ProviderEnum, RoleEnum } from "../enums/user.enum.js";

export interface IUser {
  firstName: string;
  lastName: string;
  username?: string;
  email: string;
  password?: string;
  provider: ProviderEnum;
  role: RoleEnum;
  gender: GenderEnum;
  phone?: string | undefined;
  profilePicture?: string;
  coverPictures?: string[];
  changeCredentialsTime?: Date;
  confirmEmail?: string;
  DOB?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
