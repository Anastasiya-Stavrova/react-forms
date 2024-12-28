import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, Space } from "@mantine/core";
import { IMessage } from "../../types/message";
import { IconAt, IconUser } from "@tabler/icons-react";
import * as yup from "yup";
import "./FeedbackForm.css";
import styles from "./FeedbackForm.module.css";
import dishes from "../../assets/img/devices.png";
import getData from "../../utils/getData";

const FeedbackForm = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Full name is required!"),

    email: yup
      .string()
      .required("Email is required!")
      .email("Enter a valid email format!"),

    message: yup.string(),

    grade: yup.number(),
  });

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IMessage>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IMessage> = (data) => {
    console.log(getData(data));
    reset();
  };

  const space = "lg";

  return (
    <div className={styles.modal}>
      <div className={styles["modal-left"]}>
        <div className={styles["modal-rectangle"]}>
          <img src={dishes} alt="dishes" className={styles["modal-dishes"]} />
        </div>
        <div className={styles["modal-oval"]}></div>
      </div>

      <form
        className={styles["feedback-form"]}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className={styles.title}>Share your impressions of our place</h2>

        <Space h="xl" />

        <Input.Wrapper error={errors.fullName ? errors.fullName.message : ""}>
          <Input
            className={`${
              errors.fullName ? "error" : ""
            } message-input-container`}
            placeholder="Enter your full name"
            radius="md"
            {...register("fullName")}
            rightSection={<IconUser size={16} />}
          />
        </Input.Wrapper>

        <Space h={space} />

        <Input.Wrapper error={errors.email ? errors.email.message : ""}>
          <Input
            className={`${errors.email ? "error" : ""} message-input-container`}
            placeholder="Enter your email"
            radius="md"
            {...register("email")}
            rightSection={<IconAt size={16} />}
          />
        </Input.Wrapper>

        <Space h={space} />
      </form>
    </div>
  );
};

export default FeedbackForm;
