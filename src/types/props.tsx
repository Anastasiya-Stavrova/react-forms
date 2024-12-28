import { ControllerRenderProps } from "react-hook-form";
import { IRegister } from "./register";

interface CountrySelectProps {
  label?: string;
  placeholder?: string;
  control: ControllerRenderProps<IRegister, any>;
  asterisk?: boolean;
  errorMsg?: string;
}

export type { CountrySelectProps };
