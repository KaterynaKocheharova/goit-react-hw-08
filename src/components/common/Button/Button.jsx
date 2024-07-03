import clsx from "clsx";
import css from "./Button.module.css";
import { buildButtonClass } from "./ButtonHelpers";

const Button = ({ children, type, onClick }) => {
  return (
    <button className={clsx(css.button, buildButtonClass(type))} type="submit" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
