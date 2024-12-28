import { genderType } from "./shared";

interface IRegisterData {
  fullName: string;
  email: string;
  phoneNumber?: string;
  birthDate?: Date;
  gender: genderType;
  country: string;
  password: string;
}

interface IRegister extends IRegisterData {
  cpassword: string;
  agreement: boolean;
}

export type { IRegisterData, IRegister };
