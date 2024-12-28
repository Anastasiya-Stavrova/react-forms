import "./App.css";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm.tsx";
import LoginForm from "./components/LoginForm/LoginForm.tsx";
import RegisterForm from "./components/RegisterForm/RegisterForm.tsx";

const App = () => {
  return (
    <>
      <LoginForm />
      <RegisterForm />
      <FeedbackForm />
    </>
  );
};

export default App;
