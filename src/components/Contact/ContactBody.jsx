import { CiUser, CiPhone } from "react-icons/ci";
import EditableText from "./EditableText";
import css from "./Contact.module.css";

const ContactBody = ({
  isEditing,
  contactData,
  editData,
  handleTextClick,
  clickedInputIds,
}) => {
  return (
    <div className={css["contact-info-wrapper"]}>
      <div className={css["editable-input"]}>
        <CiUser className={css["contact-person-icon"]} />
        <EditableText
          clickedInputIds={clickedInputIds}
          type="name-text"
          isEditing={isEditing}
          value={contactData.name}
          handleChange={editData}
          name="name"
          handleClick={handleTextClick}
          id="name"
        />
      </div>
      <div className={css["editable-input"]}>
        <CiPhone className={css["contact-phone-icon"]} />
        <EditableText
          clickedInputIds={clickedInputIds}
          type="number-text"
          isEditing={isEditing}
          value={contactData.number}
          handleChange={editData}
          name="number"
          handleClick={handleTextClick}
          id="number"
        />
      </div>
    </div>
  );
};

export default ContactBody;
