import { Switch } from "@mantine/core";
import { SwitchProps } from "../../types/componentsProps.tsx";

const ISwitch = ({ label, controls, disabled = false }: SwitchProps) => {
  return (
    <div className="component">
      <Switch {...controls} label={label} disabled={disabled} />
    </div>
  );
};

export default ISwitch;
