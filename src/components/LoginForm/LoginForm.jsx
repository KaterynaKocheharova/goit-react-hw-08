import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Toaster } from "react-hot-toast";
import { activateErrorToast } from "../../js/toast";
import { selectIsLoading } from "../../redux/auth/selectors";
import BaseForm from "../Form/Form";
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
      <BaseForm onSubmit={onSubmit}>
        <Button type="auth">Log in</Button>
      </BaseForm>
      <Toaster />
      {isLoading && <Loader>Sending your data. Please, wait.</Loader>}
    </div>
  );
};

export default LoginForm;
