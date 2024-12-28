import { ReactNode } from "react";
import { Control, ControllerRenderProps, FieldValues } from "react-hook-form";
import { IRegister } from "./register";

interface CountrySelectProps {
  label?: string;
  placeholder?: string;
  control: ControllerRenderProps<IRegister, any>;
  asterisk?: boolean;
  errorMsg?: string;
}

type RadioVariant = "vertical" | "horizontal";

interface IOption {
  value: string;
  label: string;
}

enum GenderEnum {
  female = "female",
  male = "male",
}

interface IFormInputs {
  message: string;
  agree: boolean;
  gender: GenderEnum;
}

interface IRadioProps {
  label: string;
  name: string;
  variant?: RadioVariant;
  defaultValue?: object;
  control: Control<IFormInputs>;
  radioList: Array<IOption>;
}

interface ICheckboxProps {
  label?: string;
  controls: FieldValues;
  disabled?: boolean;
}

interface ISwitchProps extends ICheckboxProps {}

interface ITextAreaProps {
  label?: string;
  placeholder?: string;
  controls: FieldValues;
  errorMsg: ReactNode;
  disabled?: boolean;
  asterisk?: boolean;
}

export type { CountrySelectProps };
