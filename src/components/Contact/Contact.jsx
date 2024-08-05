import { MdDeleteOutline } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { CiUser, CiPhone } from "react-icons/ci";
import css from "./Contact.module.css";

export default function Contact({
  contactData: { id, name, number },
  handleDeleteClick,
  handleUpdateContactClick,
  changeCurrentId,
}) {
  return (
    <li className={css["contact-item"]}>
      <div className={css["contact-info-wrapper"]}>
        <div className={css["contact-text-box"]}>
          <CiUser className={css["contact-person-icon"]} />
          <p className={css["name-text"]}>{name}</p>
        </div>
        <div className={css["contact-text-box"]}>
          <CiPhone className={css["contact-phone-icon"]} />
          <p className={css["number-text"]}>{number}</p>
        </div>
      </div>
      <div className={css["button-box"]}>
        <button className={css["contact-btn"]}>
          <FaPencilAlt
            className={css["button-icon"]}
            onClick={() => handleUpdateContactClick({ id, name, number })}
          />
        </button>
        <button
          className={css["contact-btn"]}
          onClick={() => {
            handleDeleteClick();
            changeCurrentId(id);
          }}
        >
          <MdDeleteOutline className={css["button-icon"]} />
        </button>
      </div>
    </li>
  );
}
