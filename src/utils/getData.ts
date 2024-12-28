import countryList from "react-select-country-list";
import { objectType } from "../types/shared";

const getData = (data: objectType) => {
  const validData: objectType = {};

  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      let field = data[key];

      if (key === "phoneNumber" && field && field.length === 4) {
        field = "";
      }

      if (key === "country") {
        field = countryList().getLabel(field);
      }

      if (field && field !== "") {
        if (key === "birthDate") {
          field = field.toISOString();
        }
        validData[key] = field;
      }
    }
  }

  return validData;
};

export default getData;
