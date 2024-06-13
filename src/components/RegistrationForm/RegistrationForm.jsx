import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import toast, { Toaster } from "react-hot-toast";
import BaseForm from "../Form/Form";
import FormButton from "../FormButton/FormButton";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(register(values))
      .unwrap()
      .catch((error) => {
        toast.error(`error: ${error}`, {
          duration: 2000,
          position: "top-right",
        });
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
