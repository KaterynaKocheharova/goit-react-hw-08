import { CiUser, CiPhone } from "react-icons/ci";
import EditableText from "./EditableText";
import css from "./Contact.module.css";

const ContactBody = ({
  isEditing,
  contactData,
  editData,
  handleTextClick,
}) => {

  return (
    <div className={css["contact-info-wrapper"]}>
      <div className={css["editable-input"]}>
        <CiUser className={css["contact-person-icon"]} />
        <EditableText
          type="name-text"
          isEditing={isEditing}
          value={contactData.name}
          handleChange={editData}
          name="name"
          handleClick={handleTextClick}
        />
      </div>
      <div className={css["editable-input"]}>
        <CiPhone className={css["contact-phone-icon"]} />
        <EditableText
          type="number-text"
          isEditing={isEditing}
          value={contactData.number}
          handleChange={editData}
          name="number"
          handleClick={handleTextClick}
        />
      </div>
    </div>
  );
};

export default ContactBody;
