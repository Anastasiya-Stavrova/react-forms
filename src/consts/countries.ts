import { useMemo } from "react";
import countryList from "react-select-country-list";

// eslint-disable-next-line react-hooks/rules-of-hooks
const countries = useMemo(() => countryList().getData(), []);

export { countries };
