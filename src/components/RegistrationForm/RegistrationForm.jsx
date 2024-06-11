import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import BaseForm from "../Form/Form";
import FormButton from "../FormButton/FormButton";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    await dispatch(register(values));
    navigate("/contacts");
  };

  return (
    <BaseForm onSubmit={onSubmit} isRegisterFomr>
      <FormButton>Register</FormButton>
    </BaseForm>
  );
};

export default RegistrationForm;
