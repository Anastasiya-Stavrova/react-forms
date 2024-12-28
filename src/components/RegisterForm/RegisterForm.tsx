import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  Anchor,
  Checkbox,
  Flex,
  Group,
  Input,
  PasswordInput,
  Radio,
  Space,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import styles from "./RegisterForm.module.css";
import { IRegister } from "../../types/register.ts";
import { IconAt, IconPhone, IconUser } from "@tabler/icons-react";
import { IMaskInput } from "react-imask";
import { genderOptions } from "../../consts/genderOptions.ts";
import { IOption } from "../../types/shared.ts";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import getData from "../../utils/getData.ts";
import CountrySelect from "../CountrySelect/CountrySelect.tsx";

const RegisterForm = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Full name is required!"),

    email: yup
      .string()
      .required("Email is required!")
      .email("Enter a valid email format!"),

    message: yup.string(),

    rating: yup.number().required("Please give us a rating"),

    pros: yup.array(),
  });

  const {
    watch,
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

  const password = watch("password");

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
              error={
                errors.fullName?.type === "required"
                  ? "Full name is required"
                  : ""
              }
              placeholder="Enter your full name"
              {...register("fullName", {
                required: true,
              })}
              rightSection={<IconUser size={16} />}
            />

            <Input.Wrapper
              className={styles.wrapper}
              withAsterisk
              label="Email"
              error={
                errors.email?.type === "required"
                  ? "Email is required"
                  : errors.email?.type === "pattern"
                  ? errors.email.message
                  : ""
              }
            >
              <Input
                className={`${errors.email ? "error" : ""}`}
                placeholder="Enter your email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                rightSection={<IconAt size={16} />}
              />
            </Input.Wrapper>
          </Group>

          <Group justify="center" className={styles.row}>
            <Controller
              name="phoneNumber"
              control={control}
              rules={{
                pattern: {
                  value: /^(.{18}|.{4})$/,
                  message: "Enter the full phone number",
                },
              }}
              render={({ field }) => (
                <Input.Wrapper
                  className={styles.wrapper}
                  label="Phone number"
                  error={
                    errors.phoneNumber?.type === "pattern"
                      ? errors.phoneNumber.message
                      : ""
                  }
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
              render={({ field }) => (
                <DateInput
                  {...field}
                  clearable
                  label="Birth date"
                  style={{ width: "210px" }}
                />
              )}
            />
          </Group>

          <Group justify="center" className={styles.row}>
            <Controller
              name="gender"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <Radio.Group
                  style={{ width: "210px" }}
                  name="gender"
                  label="Gender"
                  withAsterisk
                  error={
                    errors.gender?.type === "required"
                      ? "Gender is required"
                      : ""
                  }
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
              render={({ field }) => <CountrySelect control={field} />}
            />
          </Group>

          <Group justify="center" className={styles.row}>
            <PasswordInput
              className={`${errors.password ? "error" : ""}`}
              style={{ width: "210px" }}
              label="Password"
              withAsterisk
              {...register("password", {
                required: true,
                pattern: {
                  value: /^.{6,}$/,
                  message: "Password must be at least 6 characterss",
                },
              })}
              error={
                errors.password?.type === "required"
                  ? "Password is required"
                  : errors.password?.type === "pattern"
                  ? errors.password.message
                  : ""
              }
            />

            <PasswordInput
              className={`${errors.cpassword ? "error" : ""}`}
              style={{ width: "210px" }}
              label="Confirm Password"
              withAsterisk
              {...register("cpassword", {
                required: true,
                validate: (value) => {
                  return password === value || "Passwords must match!";
                },
              })}
              error={
                errors.cpassword?.type === "required"
                  ? "Confirm Password is required"
                  : errors.cpassword?.type === "validate"
                  ? errors.cpassword.message
                  : ""
              }
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
              {...register("agreement", {
                validate: (value) => {
                  return value || "You must agree!";
                },
              })}
              error={
                errors.agreement?.type === "validate"
                  ? errors.agreement.message
                  : ""
              }
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
