import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Input, TextInput } from "@mantine/core";
import styles from "./RegisterForm.module.css";
import { IRegister } from "../../types/register.ts";
import { IconAt, IconPhone, IconUser } from "@tabler/icons-react";
import { IMaskInput } from "react-imask";

const RegisterForm = () => {
  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IRegister> = (data) => {
    if (
      (data.phoneNumber && data.phoneNumber.length == 4) ||
      data.phoneNumber == undefined
    ) {
      delete data.phoneNumber;
    }

    console.log(data);
    reset();
  };

  return (
    <div className={styles.modal}>
      <form
        className={styles["form-container"]}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className={styles["modal-title"]}>Create Your Account</h2>
        <p className={styles["modal-desc"]}>Sign up to get started!</p>

        <div className="component">
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
        </div>
        <div className="component">
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
        </div>
        <div className="component">
          <Controller
            name="phoneNumber"
            defaultValue={undefined}
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
        </div>

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
