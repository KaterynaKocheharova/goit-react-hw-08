import css from "./Text.module.css";
import clsx from "clsx";

const Text = ({ children, isCentered, accented }) => {
  const buildTextClassName = () => {
    return clsx(
      css.text,
      isCentered && css["centered-text"],
      accented && css["accented"]
    );
  };

  return <p className={buildTextClassName()}>{children}</p>;
};

export default Text;
