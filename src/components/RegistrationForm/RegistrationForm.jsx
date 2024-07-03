import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import { activateErrorToast } from "../../js/toast";
import { selectIsLoading } from "../../redux/auth/selectors";
import BaseForm from "../common/Form/Form";
import Loader from "../Loader/Loader";
import Button from "../common/Button/Button";

const RegistrationForm = () => {
  const isLoading = useSelector(selectIsLoading);
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
      {isLoading && <Loader>Sending your data. Please, wait.</Loader>}
    </div>
  );
};

export default RegistrationForm;
