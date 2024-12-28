import { ControllerRenderProps } from "react-hook-form";
import { IOption } from "./shared";

interface ICountrySelectProps {
  label?: string;
  placeholder?: string;
  control: ControllerRenderProps<any, any>;
  asterisk?: boolean;
  errorMsg?: string;
}

interface IRadioProps {
  name: string;
  label: string;
  control: ControllerRenderProps<any, any>;
  asterisk?: boolean;
  errorMsg?: string;
  optionsList: Array<IOption>;
}

export type { ICountrySelectProps, IRadioProps };
