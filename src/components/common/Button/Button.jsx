import clsx from "clsx";
import css from "./Button.module.css";

const buildButtonClass = (type) => {
  switch (type) {
    case "auth":
      return css["auth-btn"];
    default:
      return "";
  }
};

const Button = ({ children, type }) => {
  return (
    <button className={clsx(css.button, buildButtonClass(type))} type="submit">
      {children}
    </button>
  );
};

export default Button;
