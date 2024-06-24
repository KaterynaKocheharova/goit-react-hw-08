import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import getValidationSchema from "../../js/validation-schemas";
import getInitialValues from "../../js/form-init-values";
import css from "./Form.module.css";
import clsx from "clsx";

const BaseForm = ({ children, onSubmit, type }) => {
  const emailId = useId();
  const passwordId = useId();
  const nameId = useId();
  const numberId = useId();

  return (
    <Formik
      initialValues={getInitialValues(type)}
      validationSchema={getValidationSchema(type)}
      onSubmit={onSubmit}
    >
      <Form
        className={clsx(
          css.form,
          (type === "registration-form" || type === "login-form") &&
            css["center-form"]
        )}
      >
        {type === "add-contact-form" && (
          <>
            <div className={css["form-group"]}>
              <label className={css.label} htmlFor={nameId}>
                Name
              </label>
              <Field className={css["form-field"]} id={nameId} name="name" type="text" />
              <ErrorMessage
                className={css["error-message"]}
                name="name"
                component="div"
              />
            </div>
            <div className={css["form-group"]}>
              <label className={css.label} htmlFor={numberId}>
                Number
              </label>
              <Field className={css["form-field"]} id={numberId} name="number" type="text" />
              <ErrorMessage
                className={css["error-message"]}
                name="number"
                component="div"
              />
            </div>
          </>
        )}

        {(type === "registration-form" || type === "login-form") && (
          <>
            <div className={css["form-group"]}>
              <label className={css.label} htmlFor={emailId}>
                Email
              </label>
              <Field className={css["form-field"]} id={emailId} name="email" type="email" />
              <ErrorMessage
                className={css["error-message"]}
                name="email"
                component="div"
              />
            </div>
            <div className={css["form-group"]}>
              <label className={css.label} htmlFor={passwordId}>
                Password
              </label>
              <Field
                className={css["form-field"]}
                id={passwordId}
                name="password"
                type="password"
              />
              <ErrorMessage
                className={css["error-message"]}
                name="password"
                component="div"
              />
            </div>
          </>
        )}

        {type === "registration-form" && (
          <div className={css["form-group"]}>
            <label className={css.label} htmlFor={nameId}>
              Your name
            </label>
            <Field className={css["form-field"]} id={nameId} name="name" type="text" />
            <ErrorMessage
              className={css["error-message"]}
              name="name"
              component="div"
            />
          </div>
        )}

        {children}
      </Form>
    </Formik>
  );
};

export default BaseForm;
