import css from "./Form.module.css";
import clsx from "clsx";

export const buildFormClassName = (type) => {
  return clsx(
    css.form,
    (type === "registration-form" || type === "login-form") &&
      css["center-form"]
  );
};

export const buildButtonText = (type) => {
  switch (type) {
    case "registration-form":
      return "Register";
    case "login-form":
      return "Log in";
    case "add-contact-form":
      return "Add contact";
    default:
      return "Confirm";
  }
};
