import { Formik, Form } from "formik";
import { useId } from "react";
import getValidationSchema from "../../../js/validation-schemas";
import getInitialValues from "../../../js/form-init-values";
import { buildFormClassName, buildButtonText } from "./FormHelpers";
import Button from "../Button/Button";
import FormGroup from "./FormGroup";

const BaseForm = ({ onSubmit, type }) => {
  const emailId = useId();
  const passwordId = useId();
  const nameId = useId();
  const numberId = useId();

  const isAddContactForm = type === "add-contact-form";
  const isRegistrationForm = type === "registration-form";
  const isLoginForm = type === "login-form";


  return (
    <Formik
      initialValues={getInitialValues(type)}
      validationSchema={getValidationSchema(type)}
      onSubmit={onSubmit}
    >
      <Form className={buildFormClassName(type)}>
        {isAddContactForm && (
          <>
            <FormGroup id={nameId} label="Name" name="name" type="text" />
            <FormGroup id={numberId} label="Number" name="number" type="text" />
          </>
        )}

        {(isRegistrationForm || isLoginForm) && (
          <>
            <FormGroup id={emailId} label="Email" name="email" type="email" />
            <FormGroup
              id={passwordId}
              label="Password"
              name="password"
              type="password"
            />
          </>
        )}

        {isRegistrationForm && (
          <FormGroup id={nameId} label="Your name" name="name" type="text" />
        )}
        <Button>{buildButtonText(type)}</Button>
      </Form>
    </Formik>
  );
};

export default BaseForm;
