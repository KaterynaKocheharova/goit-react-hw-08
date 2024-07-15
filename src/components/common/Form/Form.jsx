import { Formik, Form } from "formik";
import  getValidationSchema  from "../../../js/validation-schemas";
import  getInitialValues  from "../../../js/form-init-values";
import { buildFormClassName } from "./FormHelpers";
import FormGroup from "./FormGroup";

const BaseForm = ({ children, onSubmit, type }) => {

  // const numberId = useId();

  // const isAddContactForm = type === "add-contact-form";
  // const isRegistrationForm = type === "registration-form";
  // const isLoginForm = type === "login-form";

  return (
    <Formik
      initialValues={getInitialValues(type)}
      validationSchema={getValidationSchema(type)}
      onSubmit={onSubmit}
    >
      <Form className={buildFormClassName(type)}>
   
        {children}
      </Form>
    </Formik>
  );
};

export default BaseForm;

BaseForm.FormGroup = FormGroup;


     {/* {isAddContactForm && (
          <>
            <FormGroup id={nameId} label="Name" name="name" type="text" />
            <FormGroup id={numberId} label="Number" name="number" type="text" />
          </>
        )}

        {(isRegistrationForm || isLoginForm) && (
          <>
           
         
          </>
        )}

        {isRegistrationForm && (
          <FormGroup id={nameId} label="Your name" name="name" type="text" />
        )} */}
