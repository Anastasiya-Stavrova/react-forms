import { ReactNode } from "react";
import { FieldValues } from "react-hook-form";

interface SwitchProps {
  label?: string;
  controls: FieldValues;
}

interface TextAreaProps {
  label?: string;
  placeholder?: string;
  controls: FieldValues;
  errorMsg: ReactNode;
  disabled?: boolean;
  asterick?: boolean;
}

export type { TextAreaProps, SwitchProps };
