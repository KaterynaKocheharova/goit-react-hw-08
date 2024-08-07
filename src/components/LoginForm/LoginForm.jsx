import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/operations";
import { activateErrorToast } from "../../js/toast";
import { selectIsAuthLoading } from "../../redux/auth/selectors";
import BaseForm from "../common/Form/Form";
import Loader from "../common/Loader/Loader";
import Button from "../common/Button/Button";

const LoginForm = () => {
  const isLoading = useSelector(selectIsAuthLoading);
  const isLoginingInProgress = isLoading === "logining";
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
      <BaseForm onSubmit={onSubmit} type="login-form" />
      {isLoginingInProgress && (
        <Loader>Logining in progress. Please, wait.</Loader>
      )}
    </div>
  );
};

export default LoginForm;
