import { ReactNode } from "react";
import { FieldValues } from "react-hook-form";

interface CheckboxProps {
  label?: string;
  controls: FieldValues;
  disabled?: boolean;
}

interface SwitchProps extends CheckboxProps {}

interface TextAreaProps {
  label?: string;
  placeholder?: string;
  controls: FieldValues;
  errorMsg: ReactNode;
  disabled?: boolean;
  asterick?: boolean;
}

export type { TextAreaProps, SwitchProps, CheckboxProps };
