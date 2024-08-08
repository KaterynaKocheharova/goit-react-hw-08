import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { CiUser, CiPhone } from "react-icons/ci";
import BaseModal from "../common/Modal/Modal";
import ConfirmActionModal from "../common/Modal/ConfirmActionModal/ConfirmActionModal";
import { useModal } from "../../hooks/UseModal";
import css from "./Contact.module.css";

export default function Contact({ contactData: { id, name, number } }) {
  const { modalIsOpen, openModal, closeModal } = useModal();
  const [modalType, setModalType] = useState(""); // confirming deletion; confirming update; updating
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [currentContactId, setCurrentContactId] = useState(null);
  // const [contactData, setContactData] = useState(null);

  // const closeModal = () => {
  //   setModalIsOpen(false);
  // };

  // const openModal = () => {
  //   setModalIsOpen(true);
  // };

  // const changeCurrentId = (id) => {
  //   setCurrentContactId(id);
  // };

  const handleDeleteClick = () => {
    // setModalType("confirming deletion");
    openModal();
  };

  const handleUpdateClick = (contactData) => {
    // setContactData(contactData);
    // setModalType("update");
    openModal();
  };

  return (
    <>
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
              onClick={() => {
                setModalType("updating");
                handleUpdateClick({ id, name, number });
              }}
            />
          </button>
          <button
            className={css["contact-btn"]}
            onClick={() => {
              setModalType("confirming deletion");
              handleDeleteClick();
            }}
          >
            <MdDeleteOutline className={css["button-icon"]} />
          </button>
        </div>
      </li>
      <BaseModal closeModal={closeModal} modalIsOpen={modalIsOpen}>
        {modalType === "updating" ? (
          "UPDATING FORM"
        ) : (
          <ConfirmActionModal
            type={modalType}
            contactId={id}
            closeModal={closeModal}
          />
        )}
      </BaseModal>
    </>
  );
}
