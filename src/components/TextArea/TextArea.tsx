import { Textarea } from "@mantine/core";
import { ITextAreaProps } from "../../types/componentsProps.tsx";

const ITextarea = ({
  label,
  placeholder = undefined,
  controls,
  errorMsg,
  asterisk = false,
  disabled = false,
}: ITextAreaProps) => {
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
        withAsterisk={asterisk}
        error={errorMsg}
      />
    </div>
  );
};

export default ITextarea;
