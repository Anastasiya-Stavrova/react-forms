import { Checkbox } from "@mantine/core";
import { CheckboxProps } from "../../types/componentsProps.tsx";

const ICheckbox = ({ label, controls, disabled = false }: CheckboxProps) => {
  return (
    <div className="component">
      <Checkbox {...controls} label={label} disabled={disabled} />
    </div>
  );
};

export default ICheckbox;
