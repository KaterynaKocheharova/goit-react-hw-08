import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/auth/operations";
import BaseForm from "../Form/Form";
import FormButton from "../FormButton/FormButton";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    await dispatch(login(values));
    navigate("/contacts");
  };
  return (
    <BaseForm onSubmit={onSubmit}>
      <FormButton>Log in</FormButton>
    </BaseForm>
  );
};

export default LoginForm;
