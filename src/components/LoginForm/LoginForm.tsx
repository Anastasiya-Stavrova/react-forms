import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, PasswordInput, Space } from "@mantine/core";
import * as yup from "yup";
import { ILogin } from "../../types/login.ts";
import getData from "../../utils/getData.ts";
import "./LoginForm.css";
import styles from "./LoginForm.module.css";
import { IconAt } from "@tabler/icons-react";

const LoginForm = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Email is required!")
      .email("Enter a valid email format!"),

    password: yup
      .string()
      .required("Password is required!")
      .min(6, "Password must contain at least 6 characters!"),
  });

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<ILogin> = (data) => {
    console.log(getData(data));
    reset();
  };

  const space = "sm";

  return (
    <div className={styles.modal}>
      <form
        className={styles["form-container"]}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className={styles["modal-title"]}>Welcome!</h1>
        <p>Login here using your email and password.</p>

        <Space h={space} />

        <Input.Wrapper
          className={styles.wrapper}
          withAsterisk
          label="EMAIL"
          error={errors.email ? errors.email.message : ""}
        >
          <Input
            className={`${errors.email ? "error" : ""} login-input-container`}
            placeholder="Your email"
            {...register("email")}
            rightSection={<IconAt size={16} />}
          />
        </Input.Wrapper>

        <Space h={space} />

        <Input.Wrapper
          className={styles.wrapper}
          withAsterisk
          label="PASSWORD"
          error={errors.password ? errors.password.message : ""}
        >
          <PasswordInput
            className={`${
              errors.password ? "error" : ""
            } login-input-container`}
            placeholder="Your password"
            {...register("password")}
          />
        </Input.Wrapper>

        <Space h={space} />

        <div className={styles["modal-buttons"]}>
          <a className={styles["password-link"]} href="#">
            Forgot your password?
          </a>
          <button className={styles["login-button"]}>Login</button>
        </div>

        <Space h="xl" />

        <p className={styles["sign-up"]}>
          Don't have an account?&nbsp;
          <a className={styles["sign-up-link"]} href="#">
            Sign up now
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
