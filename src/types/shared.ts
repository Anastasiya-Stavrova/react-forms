type genderType = "male" | "female";

type objectType = Record<string, any>;

interface IOption {
  value: string;
  label: string;
}

export type { genderType, objectType, IOption };
