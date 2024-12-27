import "./App.css";
import LoginForm from "./components/LoginForm/LoginForm.tsx";
import RegisterForm from "./components/RegisterForm/RegisterForm.tsx";

enum GenderEnum {
  female = "female",
  male = "male",
}

/* interface IFormInputs {
  message: string;
  agree: boolean;
  gender: GenderEnum;
} */

function App() {
  /* const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    mode: "onChange",
    defaultValues: {
      message: undefined,
      agree: false,
    },
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

  const genderList = [
    { value: GenderEnum.female, label: "Ж" },
    { value: GenderEnum.male, label: "М" },
  ]; */

  return (
    <>
      <LoginForm />
      <RegisterForm />
    </>
  );
  /* <form onSubmit={handleSubmit(onSubmit)}>
      <TextArea
        label="Enter message"
        placeholder="Your message"
        controls={register("message", {
          required: true,
          minLength: 2,
        })}
        asterisk={true}
        errorMsg={
          (errors.message?.type === "required" && "Message is required") ||
          (errors.message?.type === "minLength" &&
            "The message must be at least 2 characters")
        }
      />
      <Switch label="Agree" controls={register("agree")} />
      <RadioGroup
        label="Choose your gender"
        name="gender"
        defaultValue={undefined}
        variant="horizontal"
        radioList={genderList}
        control={control}
      />
      <button type="submit">Submit</button>
    </form> */
}

export default App;
