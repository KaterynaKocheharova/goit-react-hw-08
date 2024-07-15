import { useDispatch, useSelector } from "react-redux";
import { useId } from "react";

import BaseForm from "../common/Form/Form";
import Loader from "../common/Loader/Loader";
import Button from "../common/Button/Button";
import { register } from "../../redux/auth/operations";
import { activateErrorToast } from "../../js/toast";
import { selectIsAuthLoading } from "../../redux/auth/selectors";

const RegistrationForm = () => {
  const emailId = useId();
  const passwordId = useId();
  const nameId = useId();
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
        <BaseForm.FormGroup
          id={emailId}
          label="Email"
          name="email"
          type="email"
        />
        <BaseForm.FormGroup
          id={passwordId}
          label="Password"
          name="password"
          type="password"
        />
        <BaseForm.FormGroup
          id={nameId}
          label="Your name"
          name="name"
          type="text"
        />
        <Button type="auth">Register</Button>
      </BaseForm>
      {isRegisteringInProgress && (
        <Loader>Registering you. Please, wait</Loader>
      )}
    </div>
  );
};

export default RegistrationForm;
