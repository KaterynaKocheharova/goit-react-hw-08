import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Toaster } from "react-hot-toast";
import { activateErrorToast } from "../../js/toast";
import { selectIsLoading } from "../../redux/auth/selectors";
import BaseForm from "../Form/Form";
import FormButton from "../FormButton/FormButton";
import AuthLoader from "../AuthLoader/AuthLoader";

const RegistrationForm = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(register(values))
      .unwrap()
      .catch((error) => {
        activateErrorToast(error);
      });
  };

  return (
    <div>
      <BaseForm onSubmit={onSubmit} isRegistrationForm>
        <FormButton>Register</FormButton>
      </BaseForm>
      <Toaster />
      {isLoading && <AuthLoader />}
    </div>
  );
};

export default RegistrationForm;
