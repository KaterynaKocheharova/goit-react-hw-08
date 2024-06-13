import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import BaseForm from "../Form/Form";
import FormButton from "../FormButton/FormButton";

const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(login(values));
  };
  return (
    <BaseForm onSubmit={onSubmit}>
      <FormButton>Log in</FormButton>
    </BaseForm>
  );
};

export default LoginForm;
