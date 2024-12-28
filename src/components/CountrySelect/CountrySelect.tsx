import { Select } from "@mantine/core";
import { useMemo } from "react";
import countryList from "react-select-country-list";
import { CountrySelectProps } from "../../types/props";

const CountrySelect = ({
  label = "Country",
  placeholder = "",
  control,
  asterisk = false,
  errorMsg,
}: CountrySelectProps) => {
  const options = useMemo(() => countryList().getData(), []);

  return (
    <Select
      className={`${errorMsg && "error"}`}
      label={label}
      withAsterisk={asterisk}
      placeholder={placeholder}
      nothingFoundMessage="Nothing found..."
      error={errorMsg}
      data={options}
      clearable
      allowDeselect
      searchable
      {...control}
    />
  );
};

export default CountrySelect;
