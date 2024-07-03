import css from "./Button.module.css";

export const buildButtonClass = (type) => {
    switch (type) {
      case "auth":
        return css["auth-btn"];
        case "modal-window":
          return css["modal-btn"]
      default:
        return "";
    }
  };