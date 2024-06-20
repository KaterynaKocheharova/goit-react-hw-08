import { useState } from "react";
import { CiUser, CiPhone } from "react-icons/ci";
import CustomModal from "../Modal/Modal";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import { activateSuccessToast } from "../../js/toast";

export default function Contact({ contactData: { name, number, id } }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingNumber, setIsEditingNumber] = useState(false);
  const [contactData, setContactData] = useState({ name, number, id });
  const dispatch = useDispatch();

  const toggleEditingName = () => {
    setIsEditingName((prev) => !prev);
  };

  const toggleEditingNumber = () => {
    setIsEditingNumber((prev) => !prev);
  };

  const handleOnBlur = (e) => {
    if (e.target.name === "name") {
      toggleEditingName();
    } else if (e.target.name === "number") {
      toggleEditingNumber();
    }

    dispatch(updateContact(contactData));
  };

  const editData = (e) => {
    setContactData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

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
            {isEditingName ? (
              <input
                type="text"
                value={contactData.name}
                onChange={editData}
                name="name"
                onBlur={handleOnBlur}
                autoFocus
              />
            ) : (
              <p className={css["name-text"]} onClick={toggleEditingName}>
                {contactData.name}
              </p>
            )}
          </div>
          <div className={css["item-icon-box"]}>
            <CiPhone className={css["contact-phone-icon"]} />
            {isEditingNumber ? (
              <input
                type="number"
                name="number"
                value={contactData.number}
                onChange={editData}
                onBlur={handleOnBlur}
                autoFocus
              />
            ) : (
              <p className={css["number-text"]} onClick={toggleEditingNumber}>
                {contactData.number}
              </p>
            )}
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
