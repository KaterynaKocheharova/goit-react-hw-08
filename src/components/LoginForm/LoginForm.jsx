import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Toaster } from "react-hot-toast";
import { activateErrorToast } from "../../js/toast";
import { selectIsLoading } from "../../redux/auth/selectors";
import BaseForm from "../Form/Form";
import FormButton from "../FormButton/FormButton";
import AuthLoader from "../AuthLoader/AuthLoader";

const LoginForm = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(login(values))
      .unwrap()
      .catch((error) => {
        activateErrorToast(error, "login");
      });
  };

  return (
    <div>
      <BaseForm onSubmit={onSubmit}>
        <FormButton>Log in</FormButton>
      </BaseForm>
      <Toaster />
      {isLoading && <AuthLoader />}
    </div>
  );
};

export default LoginForm;
