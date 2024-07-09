import css from "./Text.module.css";
import clsx from "clsx";

export const buildTextClassName = (isCentered, accented, isLoaderText) => {
    return clsx(
      css.text,
      isCentered && css["centered-text"],
      accented && css["accented"],
      isLoaderText && css["loader-text"]
    );
  };