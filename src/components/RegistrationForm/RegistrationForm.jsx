import { useDispatch, useSelector } from "react-redux";
import BaseForm from "../common/Form/Form";
import Loader from "../common/Loader/Loader";
import Button from "../common/Button/Button";
import { register } from "../../redux/auth/operations";
import { activateErrorToast } from "../../js/toast";
import { selectIsAuthLoading } from "../../redux/auth/selectors";

const RegistrationForm = () => {
  const isLoading = useSelector(selectIsAuthLoading);
  const isRegisteringInProgress = isLoading === "registering";
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(register(values))
      .unwrap()
      .catch((error) => {
        activateErrorToast(error, "register");
      });
  };

  return (
    <div>
      <BaseForm onSubmit={onSubmit} type="registration-form">
        <Button type="auth">Register</Button>
      </BaseForm>
      {isRegisteringInProgress && (
        <Loader>Registering you. Please, wait</Loader>
      )}
    </div>
  );
};

export default RegistrationForm;
