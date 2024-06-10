import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import BaseForm from "../Form/Form";
import FormButton from "../FormButton/FormButton";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    console.log(values);
    dispatch(register(values));
  };

  return (
    <BaseForm onSubmit={onSubmit}>
      <FormButton>Register</FormButton>
    </BaseForm>
  );
};

export default RegistrationForm;
