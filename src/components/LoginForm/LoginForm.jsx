import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Toaster } from "react-hot-toast";
import { activateErrorToast } from "../../js/toast";
import BaseForm from "../Form/Form";
import FormButton from "../FormButton/FormButton";

const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(login(values))
      .unwrap()
      .catch((error) => {
        activateErrorToast(error);
      });
  };

  return (
    <div>
      <BaseForm onSubmit={onSubmit}>
        <FormButton>Log in</FormButton>
      </BaseForm>
      <Toaster />
    </div>
  );
};

export default LoginForm;
