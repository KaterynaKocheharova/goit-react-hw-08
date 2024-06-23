import { useState, useEffect } from "react";
import { CiUser, CiPhone } from "react-icons/ci";
import CustomModal from "../Modal/Modal";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import { activateErrorToast, activateSuccessToast } from "../../js/toast";

export default function Contact({ contactData: { name, number, id } }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(null); // 'name' or 'number' or null
  const [contactData, setContactData] = useState({ name, number, id });
  const [modalType, setModalType] = useState("");
  const dispatch = useDispatch();

  const toggleEditing = (field) => {
    setIsEditing((prev) => (prev === field ? null : field));
  };

  useEffect(() => {
    if (isEditing) {
      setModalType("editingContactModal");
    } else {
      setModalType("deleteContactModal");
    }
  }, [isEditing]);

  const editData = (e) => {
    setContactData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  function openModal() {
    setIsOpen(true);
  }

  const doUpdateContact = () => {
    dispatch(updateContact(contactData))
      .unwrap()
      .then(() => {
        activateSuccessToast("Contact successfully updated");
        setIsEditing(false);
      })
      .catch((error) => activateErrorToast(error));
  };

  function doDeleteContact() {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        activateSuccessToast("Contact successfully deleted");
      });
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <li className={css["contact-item"]}>
        <div className={css["contact-info-wrapper"]}>
          {isEditing === "name" ? (
            <input
              className={css["contact-input"]}
              type="text"
              value={contactData.name}
              onChange={editData}
              name="name"
              onBlur={() => setIsEditing(false)}
              autoFocus
            />
          ) : (
            <div className={css["item-icon-box"]}>
              <CiUser className={css["contact-person-icon"]} />
              <p
                className={css["name-text"]}
                onClick={() => toggleEditing("name")}
              >
                {contactData.name}
              </p>
            </div>
          )}
          {isEditing === "number" ? (
            <input
              className={css["contact-input"]}
              type="number"
              name="number"
              value={contactData.number}
              onChange={editData}
              onBlur={() => setIsEditing(false)}
              autoFocus
            />
          ) : (
            <div className={css["item-icon-box"]}>
              <CiPhone className={css["contact-phone-icon"]} />
              <p
                className={css["number-text"]}
                onClick={() => toggleEditing("number")}
              >
                {contactData.number}
              </p>
            </div>
          )}
        </div>
        <button className={css["delete-button"]} onClick={openModal}>
          {isEditing ? "Update" : "Delete"}
        </button>
      </li>
      <CustomModal
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        type={modalType}
        doSomething={isEditing ? doUpdateContact : doDeleteContact}
      />
    </>
  );
}
