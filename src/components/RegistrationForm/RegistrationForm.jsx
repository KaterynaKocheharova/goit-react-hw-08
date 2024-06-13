import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Toaster } from "react-hot-toast";
import { activateErrorToast } from "../../js/toast";
import BaseForm from "../Form/Form";
import FormButton from "../FormButton/FormButton";

const RegistrationForm = () => {
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
    </div>
  );
};

export default RegistrationForm;
