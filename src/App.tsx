import { useForm } from "react-hook-form";
import TextArea from "./components/TextArea/Textarea.tsx";
import Checkbox from "./components/Checkbox/Checkbox.tsx";
import "./App.css";

function App() {
  const {
    register,
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    criteriaMode: "all",
    defaultValues: {
      mess: "GGGGG",
      sw: true,
    },
  });
  return (
    <>
      <TextArea
        label="Message"
        placeholder="Hi!"
        controls={register("mess", {
          required: true,
          minLength: 2,
        })}
        asterick={true}
        errorMsg={
          (errors.mess?.type === "required" && "Mess is required") ||
          (errors.mess?.type === "minLength" && "Mess not less then 2 simbol")
        }
      />
      <Checkbox label="Switch" controls={register("sw")} />
    </>
  );
}

export default App;
