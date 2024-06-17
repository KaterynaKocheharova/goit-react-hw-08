import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Toaster } from "react-hot-toast";
import { activateErrorToast } from "../../js/toast";
import { selectIsLoading } from "../../redux/auth/selectors";
import BaseForm from "../Form/Form";
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
      <BaseForm onSubmit={onSubmit} isRegistrationForm>
        <Button type="auth">Register</Button>
      </BaseForm>
      <Toaster />
      {isLoading && <Loader>Sending your data. Please, wait.</Loader>}
    </div>
  );
};

export default RegistrationForm;
