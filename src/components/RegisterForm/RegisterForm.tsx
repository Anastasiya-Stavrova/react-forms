import { useMemo } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  Anchor,
  Checkbox,
  Flex,
  Group,
  Input,
  PasswordInput,
  Radio,
  Select,
  Space,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { IRegister } from "../../types/register.ts";
import { IconAt, IconPhone, IconUser } from "@tabler/icons-react";
import { IMaskInput } from "react-imask";
import { genderOptions } from "../../consts/genderOptions.ts";
import { genderType, IOption } from "../../types/shared.ts";
import { yupResolver } from "@hookform/resolvers/yup";
import countryList from "react-select-country-list";
import * as yup from "yup";
import getData from "../../utils/getData.ts";
import styles from "./RegisterForm.module.css";

const RegisterForm = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Full name is required"),

    email: yup
      .string()
      .required("Email is required")
      .email("Enter a valid email format"),

    phoneNumber: yup
      .string()
      .matches(/^(.{18}|.{4})$/, "Enter the full phone number"),

    birthDate: yup.date(),

    gender: yup.mixed<genderType>(),

    country: yup.string(),

    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),

    cpassword: yup
      .string()
      .required("Confirm password is required")
      .oneOf([yup.ref("password")], "Passwords must match"),

    agreement: yup.boolean().required().oneOf([true], "You must agree"),
  });

  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IRegister> = (data: IRegister) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { cpassword, agreement, ...rest } = data;

    console.log(getData(rest));
    reset();
  };

  const countries = useMemo(() => countryList().getData(), []);

  return (
    <div className={styles.modal}>
      <form
        className={styles["form-container"]}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className={styles["modal-title"]}>Create Your Account</h2>
        <p className={styles["modal-desc"]}>Sign up to get started!</p>

        <Flex
          gap="md"
          justify="center"
          align="center"
          direction="column"
          wrap="wrap"
        >
          <Group justify="center" className={styles.row}>
            <TextInput
              className={`${errors.fullName ? "error" : ""}`}
              label="Full name"
              withAsterisk
              error={errors.fullName ? errors.fullName.message : ""}
              placeholder="Enter your full name"
              {...register("fullName")}
              rightSection={<IconUser size={16} />}
            />

            <Input.Wrapper
              className={styles.wrapper}
              withAsterisk
              label="Email"
              error={errors.email ? errors.email.message : ""}
            >
              <Input
                className={`${errors.email ? "error" : ""}`}
                placeholder="Enter your email"
                {...register("email")}
                rightSection={<IconAt size={16} />}
              />
            </Input.Wrapper>
          </Group>

          <Group justify="center" className={styles.row}>
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field }) => (
                <Input.Wrapper
                  className={styles.wrapper}
                  label="Phone number"
                  error={errors.phoneNumber ? errors.phoneNumber.message : ""}
                >
                  <Input
                    {...field}
                    className={`${errors.phoneNumber ? "error" : ""}`}
                    placeholder="Enter your phone number"
                    component={IMaskInput}
                    mask="+7 (000) 000-00-00"
                    rightSection={<IconPhone size={16} />}
                  />
                </Input.Wrapper>
              )}
            />

            <Controller
              name="birthDate"
              control={control}
              defaultValue={undefined}
              render={({ field }) => (
                <DateInput
                  {...field}
                  clearable
                  label="Birth date"
                  placeholder="Select your birth date"
                  style={{ width: "210px" }}
                />
              )}
            />
          </Group>

          <Group justify="center" className={styles.row}>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <Radio.Group
                  style={{ width: "210px" }}
                  name="gender"
                  label="Gender"
                >
                  <Group mt="xs">
                    {genderOptions.map((option: IOption, index) => {
                      return (
                        <Radio
                          {...field}
                          key={index}
                          value={option.value}
                          label={option.label}
                        />
                      );
                    })}
                  </Group>
                </Radio.Group>
              )}
            />

            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <Select
                  label="Country"
                  placeholder="Select your country"
                  data={countries}
                  {...field}
                />
              )}
            />
          </Group>

          <Group justify="center" className={styles.row}>
            <PasswordInput
              className={`${errors.password ? "error" : ""}`}
              style={{ width: "210px" }}
              label="Password"
              withAsterisk
              {...register("password")}
              error={errors.password ? errors.password.message : ""}
            />

            <PasswordInput
              className={`${errors.cpassword ? "error" : ""}`}
              style={{ width: "210px" }}
              label="Confirm Password"
              withAsterisk
              {...register("cpassword")}
              error={errors.cpassword ? errors.cpassword.message : ""}
            />
          </Group>

          <Group className={styles.row}>
            <Checkbox
              className={`${errors.agreement ? "error" : ""}`}
              label={
                <>
                  I agree to the{" "}
                  <Anchor
                    href="#"
                    style={{
                      color: "rgb(13, 110, 253)",
                    }}
                  >
                    terms and conditions
                  </Anchor>
                </>
              }
              {...register("agreement")}
              error={errors.agreement ? errors.agreement.message : ""}
            />
          </Group>
        </Flex>

        <Space h="xl" />

        <button className={styles["register-button"]}>Register</button>
        <div className={styles["text-muted"]}>
          Already have an account?{" "}
          <a href="#" className={styles["text-primary"]}>
            Sign In
          </a>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
