import { Radio, Group } from "@mantine/core";
import { IRadioProps, IOption } from "../../types/componentsProps.tsx";
import styles from "./RadioGroup.module.css";
import { Controller } from "react-hook-form";

const IRadioGroup = ({
  label,
  name,
  control,
  defaultValue,
  variant = "horizontal",
  radioList,
}: IRadioProps) => {
  return (
    <div className="component">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Radio.Group label={label}>
            <Group className={`${variant == "vertical" ? styles.stack : ""}`}>
              {radioList.map((radio: IOption, index: number) => {
                return (
                  <Radio key={index} value={"male"} label={radio.label}></Radio>
                );
              })}
              {...field}
            </Group>
          </Radio.Group>
          /* <Select
            {...field}
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" },
            ]}
          /> */
        )}
      />
      {/* <Radio.Group label={label}>
        <Group className={`${variant == "vertical" ? styles.stack : ""}`}>
          {radioList.map((radio: IOption, index: number) => {
            return (
              <Radio
                key={index}
                value={radio.value}
                label={radio.label}
                {...controls}
              ></Radio>
            );
          })}
        </Group>
      </Radio.Group> */}
    </div>
  );
};

export default IRadioGroup;
