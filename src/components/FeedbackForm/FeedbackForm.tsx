import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Center,
  Input,
  Rating,
  rem,
  Space,
  Stack,
  Textarea,
  MultiSelect,
} from "@mantine/core";
import { IMessage } from "../../types/message";
import { IconAt, IconMailFast, IconUser } from "@tabler/icons-react";
import * as yup from "yup";
import { advantages } from "../../consts/advantages";
import getData from "../../utils/getData";
import "./FeedbackForm.css";
import styles from "./FeedbackForm.module.css";
import dishes from "../../assets/img/devices.png";

const FeedbackForm = () => {
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
    control,
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

        <Controller
          name="pros"
          defaultValue={[]}
          control={control}
          render={({ field }) => (
            <MultiSelect
              className={"message-input-container"}
              {...field}
              placeholder={`${
                field.value?.length === 0 || field.value === undefined
                  ? "Pick out what you like about our place"
                  : ""
              }`}
              radius="md"
              data={advantages}
              onChange={field.onChange}
            />
          )}
        />

        <Space h={space} />

        <Textarea
          className={"message-input-container"}
          autosize
          minRows={6}
          maxRows={6}
          placeholder="Write us your complaint, suggestion or thanks"
          radius="md"
          {...register("message")}
        />

        <Space h={space} />

        <Center>
          <Stack style={{ gap: "0" }}>
            <Controller
              name="rating"
              control={control}
              defaultValue={0}
              render={({ field: { onChange, value } }) => (
                <>
                  <Rating
                    name={"rating"}
                    onChange={onChange}
                    value={value}
                    size="xl"
                  />
                  {errors.rating && (
                    <p
                      style={{ alignSelf: "center" }}
                      className="m_8f816625 mantine-InputWrapper-error"
                    >
                      {errors.rating.message}
                    </p>
                  )}
                </>
              )}
            />
          </Stack>
        </Center>

        <Space h="xl" />

        <div className={styles["button-container"]}>
          <Button
            type="submit"
            className={styles["feedback-button"]}
            variant="gradient"
            gradient={{ from: "yellow", to: "orange", deg: 90 }}
            rightSection={
              <IconMailFast style={{ width: rem(30), height: rem(30) }} />
            }
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
