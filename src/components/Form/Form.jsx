import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./Form.module.css";

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password is too short - should be 8 chars minimum."),
});

const registerValidationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter.")
    .matches(/[0-9]/, "Password must contain at least one number.")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character."
    ),
});

const loginInitialValues = {
  email: "",
  password: "",
};

const registerInitialValues = {
  ...loginInitialValues,
  name: "",
};

const BaseForm = ({ children, onSubmit, isRegistrationForm }) => {
  const initialValues = isRegistrationForm
    ? registerInitialValues
    : loginInitialValues;

  const validationSchema = isRegistrationForm
    ? registerValidationSchema
    : loginValidationSchema;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={css.form}>
        {isRegistrationForm && (
          <div className={css["form-group"]}>
            <label className={css.label} htmlFor="name">
              Your name
            </label>
            <Field className={css["form-field"]} name="name" type="text" />
            <ErrorMessage
              className={css["error-message"]}
              name="name"
              component="div"
            />
          </div>
        )}
        <div className={css["form-group"]}>
          <label className={css.label} htmlFor="email">
            Email
          </label>
          <Field className={css["form-field"]} name="email" type="email" />
          <ErrorMessage className={css["error-message"]} name="email" />
        </div>
        <div className={css["form-group"]}>
          <label className={css.label} htmlFor="password">
            Password
          </label>
          <Field
            className={css["form-field"]}
            name="password"
            type="password"
          />
          <ErrorMessage className={css["error-message"]} name="password" />
        </div>
        {children}
      </Form>
    </Formik>
  );
};

export default BaseForm;
