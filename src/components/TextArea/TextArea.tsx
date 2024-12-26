import { Textarea } from "@mantine/core";
import { TextAreaProps } from "../../types/componentsProps.tsx";

const ITextarea = ({
  label,
  placeholder = undefined,
  controls,
  errorMsg,
  asterick = false,
  disabled = false,
}: TextAreaProps) => {
  return (
    <div className="component">
      <Textarea
        className={`${errorMsg && "error"}`}
        resize="vertical"
        autosize
        minRows={3}
        {...controls}
        label={label}
        placeholder={placeholder}
        disabled={disabled}
        withAsterisk={asterick}
        error={errorMsg}
      />
    </div>
  );
};

export default ITextarea;
