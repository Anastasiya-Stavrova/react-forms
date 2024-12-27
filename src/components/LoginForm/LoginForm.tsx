import { SubmitHandler, useForm } from "react-hook-form";
import { Input, PasswordInput } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import "./LoginForm.css";
import styles from "./LoginForm.module.css";
import { ILogin } from "../../types/login.ts";
import getData from "../../utils/getData.ts";

const LoginForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<ILogin> = (data) => {
    console.log(getData(data));
    reset();
  };

  return (
    <div className={styles.modal}>
      <form
        className={styles["form-container"]}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className={styles["modal-title"]}>Welcome!</h1>
        <p className={styles["modal-desc"]}>
          Login here using your email and password.
        </p>
        <div className="component">
          <Input.Wrapper
            className={styles.wrapper}
            withAsterisk
            label="EMAIL"
            error={
              errors.email?.type === "required"
                ? "Email is required"
                : errors.email?.type === "pattern"
                ? errors.email.message
                : ""
            }
          >
            <Input
              className={`${errors.email ? "error" : ""} login-input-container`}
              placeholder="Your email"
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
        </div>
        <div className="component">
          <Input.Wrapper
            className={styles.wrapper}
            withAsterisk
            label="PASSWORD"
            error={
              errors.password?.type === "required"
                ? "Password is required"
                : errors.password?.type === "minLength"
                ? "The password must contain at least 6 characters"
                : ""
            }
          >
            <PasswordInput
              className={`${
                errors.password ? "error" : ""
              } login-input-container`}
              placeholder="Your password"
              {...register("password", {
                required: true,
                minLength: 6,
              })}
            />
          </Input.Wrapper>
        </div>
        <div className={styles["modal-buttons"]}>
          <a className={styles["password-link"]} href="#">
            Forgot your password?
          </a>
          <button className={styles["login-button"]}>Login</button>
        </div>
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
