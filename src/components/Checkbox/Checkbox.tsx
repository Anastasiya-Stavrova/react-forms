import { Checkbox } from "@mantine/core";
import { ICheckboxProps } from "../../types/componentsProps.tsx";

const ICheckbox = ({ label, controls, disabled = false }: ICheckboxProps) => {
  return (
    <div className="component">
      <Checkbox {...controls} label={label} disabled={disabled} />
    </div>
  );
};

export default ICheckbox;
