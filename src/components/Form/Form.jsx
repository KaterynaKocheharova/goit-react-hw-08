import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./Form.module.css";

const ValidationSchema = Yup.object().shape({
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

const BaseForm = ({ children, onSubmit }) => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={onSubmit}
    >
      <Form className={css.form}>
        <div>
          <label htmlFor="name">Your name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" />
        </div>
        {children}
      </Form>
    </Formik>
  );
};

export default BaseForm;
