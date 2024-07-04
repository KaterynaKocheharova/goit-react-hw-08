import { CiUser, CiPhone } from "react-icons/ci";
import css from "./Contact.module.css";

const ContactBody = ({ isEditing, contactData, editData, handleTextClick }) => {
  return (
    <div className={css["contact-info-wrapper"]}>
      <div className={css["item-icon-box"]}>
        <CiUser className={css["contact-person-icon"]} />
        {isEditing ? (
          <input
            className={css["contact-input"]}
            type="text"
            value={contactData.name}
            onChange={editData}
            name="name"
            autoFocus
          />
        ) : (
          <p className={css["name-text"]} onClick={handleTextClick}>
            {contactData.name}
          </p>
        )}
      </div>
      <div className={css["item-icon-box"]}>
        <CiPhone className={css["contact-phone-icon"]} />
        {isEditing ? (
          <input
            className={css["contact-input"]}
            type="number"
            name="number"
            value={contactData.number}
            onChange={editData}
            autoFocus
          />
        ) : (
          <p className={css["number-text"]} onClick={handleTextClick}>
            {contactData.number}
          </p>
        )}
      </div>
    </div>
  );
}

export default ContactBody;