import clsx from "clsx";
import css from "./Button.module.css";

const buildButtonClass = (type) => {
  switch (type) {
    case "auth":
      return css["auth-btn"];
      case "modal-window":
        return css["modal-btn"]
    default:
      return "";
  }
};

const Button = ({ children, type, onClick }) => {
  return (
    <button className={clsx(css.button, buildButtonClass(type))} type="submit" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
