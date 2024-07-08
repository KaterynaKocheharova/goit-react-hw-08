import { useEffect, useRef } from "react";
import css from "./Contact.module.css";

const EditableText = ({
  isEditing,
  value,
  handleChange,
  name,
  handleClick,
  clickedInputIds,
  id,
}) => {
  const numberInputRef = useRef(null);
  const nameInputRef = useRef(null);

  useEffect(() => {
    if (isEditing && clickedInputIds.includes(id)) {
      if (name === "number" && numberInputRef.current) {
        numberInputRef.current.focus();
      } else if (name === "name" && nameInputRef.current) {
        nameInputRef.current.focus();
      }
    }
  }, [isEditing, name, clickedInputIds, id]);

  return isEditing && clickedInputIds.includes(id) ? (
    <input
      ref={name === "number" ? numberInputRef : nameInputRef}
      className={css["contact-input"]}
      type={name === "number" ? "tel" : "text"}
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
