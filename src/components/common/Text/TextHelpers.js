import css from "./Text.module.css";
import clsx from "clsx";

export const buildTextClassName = (isCentered = false, accented = false) => {
    return clsx(
      css.text,
      isCentered && css["centered-text"],
      accented && css["accented"]
    );
  };