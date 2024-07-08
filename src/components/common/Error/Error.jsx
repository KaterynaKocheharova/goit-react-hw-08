import css from "./Error.module.css";
import { TbFaceIdError } from "react-icons/tb";

const Error = ({ children }) => {
  return (
    <div className={css["error-box"]}>
      <p className={css.error}>{children}</p>
      <TbFaceIdError className={css.icon} />
    </div>
  );
};

export default Error;
