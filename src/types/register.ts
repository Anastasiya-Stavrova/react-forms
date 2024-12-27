import { genderType } from "./shared";

interface IRegister {
  fullName: string;
  email: string;
  phoneNumber?: string;
  birthDate?: Date;
  gender: genderType;
  country: string;
}

export type { IRegister };
