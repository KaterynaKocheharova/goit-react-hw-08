
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
  const [modalType, setModalType] = useState("")
  const dispatch = useDispatch();

  const toggleEditing = (field) => {
    setIsEditing((prev) => (prev === field ? null : field));
  };

  const handleOnBlur = () => {
    setIsEditing(null);
  };

  useEffect(() => {
    if(isEditing) {
      setModalType("editingContactModal")
    } else {
      setModalType("deleteContactModal")
    } 
  },[isEditing])

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
    .then(() => activateSuccessToast("Contact successfully updated"))
    .catch((error) => activateErrorToast(error));
  }

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
          <div className={css["item-icon-box"]}>
            <CiUser className={css["contact-person-icon"]} />
            {isEditing === "name" ? (
              <input
                type="text"
                value={contactData.name}
                onChange={editData}
                name="name"
                onBlur={handleOnBlur}
                autoFocus
              />
            ) : (
              <p
                className={css["name-text"]}
                onClick={() => toggleEditing("name")}
              >
                {contactData.name}
              </p>
            )}
          </div>
          <div className={css["item-icon-box"]}>
            <CiPhone className={css["contact-phone-icon"]} />
            {isEditing === "number" ? (
              <input
                type="number"
                name="number"
                value={contactData.number}
                onChange={editData}
                onBlur={handleOnBlur}
                autoFocus
              />
            ) : (
              <p
                className={css["number-text"]}
                onClick={() => toggleEditing("number")}
              >
                {contactData.number}
              </p>
            )}
          </div>
        </div>
        <button className={css["delete-button"]} onClick={openModal}>
          {isEditing ? "Update contact" : "Deelete contact"}
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


