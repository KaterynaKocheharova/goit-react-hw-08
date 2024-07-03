import css from "./Form.module.css";
import clsx from "clsx";

export const buildFormClassName = (type) => {
  return clsx(
    css.form,
    (type === "registration-form" || type === "login-form") &&
      css["center-form"]
  );
};
