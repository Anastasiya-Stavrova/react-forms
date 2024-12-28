import { Radio, Group } from "@mantine/core";
import { IRadioProps } from "../../types/props.tsx";
import { SetStateAction, useState } from "react";
import { IOption } from "../../types/shared.ts";

const DeselectedRadioGroup = ({
  label,
  control,
  asterisk,
  errorMsg,
  optionsList,
}: IRadioProps) => {
  const [value, setValue] = useState<string | null>(null);

  const handleRadioChange = (newValue: SetStateAction<string | null>) => {
    if (newValue === value) {
      setValue(null);
    } else {
      setValue(newValue);
    }
  };

  return (
    <Radio.Group
      label={label}
      withAsterisk={asterisk}
      error={errorMsg}
      {...control}
    >
      <Group mt="xs">
        {optionsList.map((option: IOption, index) => {
          return (
            <Radio
              key={index}
              value={option.value}
              label={option.label}
              onChange={(e) => {
                if (e.target.value === value) {
                  setValue(null);
                  e.target.checked = false;
                } else {
                  setValue(e.target.value);
                }
              }}
            />
          );
        })}
      </Group>
    </Radio.Group>
  );
};

export default DeselectedRadioGroup;
