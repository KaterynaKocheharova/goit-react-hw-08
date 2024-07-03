import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/operations";
import { activateErrorToast } from "../../js/toast";
import { selectIsLoading } from "../../redux/auth/selectors";
import BaseForm from "../common/Form/Form";
import Loader from "../Loader/Loader";
import Button from "../common/Button/Button";

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
      <BaseForm onSubmit={onSubmit} type="login-form">
        <Button type="auth">Log in</Button>
      </BaseForm>
      {isLoading && <Loader>Sending your data. Please, wait.</Loader>}
    </div>
  );
};

export default LoginForm;
