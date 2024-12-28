import { Switch } from "@mantine/core";
import { ISwitchProps } from "../../types/props.tsx";

const ISwitch = ({ label, controls, disabled = false }: ISwitchProps) => {
  return (
    <div className="component">
      <Switch {...controls} label={label} disabled={disabled} />
    </div>
  );
};

export default ISwitch;
