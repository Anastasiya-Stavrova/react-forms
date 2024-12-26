import { Switch } from "@mantine/core";
import { SwitchProps } from "../../types/componentsProps.tsx";

const ISwitch = ({ label, controls }: SwitchProps) => {
  return (
    <div className="component">
      <Switch {...controls} label={label} />
    </div>
  );
};

export default ISwitch;
