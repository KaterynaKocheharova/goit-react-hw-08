import { useEffect, useRef } from "react";
import css from "./Contact.module.css";

const EditableText = ({
  isEditing,
  value,
  handleChange,
  name,
  handleClick,
  clickedInputId,
  id,
}) => {
  const numberInputRef = useRef(null);
  const nameInputRef = useRef(null);

  useEffect(() => {
    if (isEditing && clickedInputId === id) {
      if (name === "number" && numberInputRef.current) {
        numberInputRef.current.focus();
      } else if (name === "name" && nameInputRef.current) {
        nameInputRef.current.focus();
      }
    }
  }, [isEditing, name, clickedInputId, id]);

  return isEditing && clickedInputId === id ? (
    <input
      ref={name === "number" ? numberInputRef : nameInputRef}
      className={css["contact-input"]}
      type={name === "number" ? "number" : "text"}
      value={value}
      onChange={handleChange}
      name={name}
      autoFocus
    />
  ) : (
    <p
      className={css[`${name}-text`]}
      onClick={handleClick}
      data-type={
        name === "number" ? "numberInput" : name === "name" ? "nameInput" : ""
      }
      data-id={id}
    >
      {value}
    </p>
  );
};

export default EditableText;
