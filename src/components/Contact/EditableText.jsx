import { useEffect, useRef } from "react";
import css from "./Contact.module.css";

const EditableText = ({
  isEditing,
  value,
  handleChange,
  name,
  handleClick,
  type,
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
        ref={inputRef}
        className={css["contact-input"]}
        type={name === "number" ? "number" : "text"}
        value={value}
        onChange={handleChange}
        name={name}
        // autoFocus
      />
    );
  }

  return (
    <p className={css[`${name}-text`]} onClick={handleClick} data-type={type}>
      {value}
    </p>
  );
};

export default EditableText;
