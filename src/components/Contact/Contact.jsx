import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import CustomModal from "../Modal/Modal";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { activateSuccessToast } from "../../js/toast";

export default function Contact({ contactData: { name, number, id } }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        activateSuccessToast("Contact successfully deleted");
      });
  }

  return (
    <>
      <li className={css["contact-item"]}>
        <div className={css["contact-info-wrapper"]}>
          <div className={css["item-icon-box"]}>
            <CiUser className={css["contact-person-icon"]} />
            <p className={css["name-text"]}>{name}</p>
          </div>
          <div className={css["item-icon-box"]}>
            <CiPhone className={css["contact-phone-icon"]} />
            <p className={css["number-text"]}>{number}</p>
          </div>
        </div>
        <button className={css["delete-button"]} onClick={openModal}>
          Delete contact
        </button>
      </li>
      <CustomModal
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        type="deleteContactModal"
      />
    </>
  );
}
