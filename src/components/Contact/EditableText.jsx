
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

  return isEditing && clickedInputIds.includes(id) ? (
    <input
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
      data-id={id}
    >
      {value}
    </p>
  );
};

export default EditableText;
