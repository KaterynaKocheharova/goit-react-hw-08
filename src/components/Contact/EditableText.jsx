import { useEffect, useRef } from "react";
import css from "./Contact.module.css";

const EditableText = ({
  isEditing,
  value,
  handleChange,
  name,
  handleClick,
  clickedInput,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  if (isEditing) {
    return (
      <input
        className={css["contact-input"]}
        type={name === "number" ? "number" : "text"}
        value={value}
        onChange={handleChange}
        name={name}
        autoFocus={
          (name === "number" && clickedInput === "numberInput") ||
          (name === "name" && clickedInput === "nameInput")
        }
      />
    );
  }

  return (
    <p
      className={css[`${name}-text`]}
      onClick={handleClick}
      data-type={name === "number" ? "numberInput" : "nameInput"}
    >
      {value}
    </p>
  );
};

export default EditableText;
