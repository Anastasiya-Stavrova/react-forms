import { genderType } from "./shared";

interface IRegister {
  fullName: string;
  email: string;
  phoneNumber?: string;
  birthDate?: Date;
  gender?: genderType;
  country?: string;
  password: string;
  cpassword: string;
  agreement: boolean;
}

export type { IRegister };
