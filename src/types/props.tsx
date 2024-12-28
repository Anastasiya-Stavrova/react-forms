import { ControllerRenderProps } from "react-hook-form";
import { IOption } from "./shared";

interface ISelectProps {
  label?: string;
  asterisk?: boolean;
  placeholder?: string;
  errorMsg?: string;
}

interface IMultiSelectProps extends ISelectProps {
  name: string;
  optionsList: Array<string>;
}

interface ICountrySelectProps extends ISelectProps {
  control: ControllerRenderProps<any, any>;
}

interface IRadioProps {
  name: string;
  label: string;
  control: ControllerRenderProps<any, any>;
  asterisk?: boolean;
  errorMsg?: string;
  optionsList: Array<IOption>;
}

export type { ICountrySelectProps, IRadioProps, IMultiSelectProps };
