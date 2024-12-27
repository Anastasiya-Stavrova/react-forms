import { gender } from "./shared";

interface IRegister {
  fullName: string;
  email: string;
  phoneNumber?: string;
  birthDate?: Date;
  gender: gender;
  country: string;
}

export type { IRegister };
