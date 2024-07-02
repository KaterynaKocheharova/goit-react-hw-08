import { CiUser, CiPhone } from "react-icons/ci";
import CustomModal from "../Modal/Modal";
import css from "./Contact.module.css";
import { UseModal } from "../../hooks/UseModal";
import { useContact } from "../../hooks/useContact";
import { addContactValidationSchema } from "../../js/validation-schemas";
import { activateErrorToastWithCustomMessage } from "../../js/toast";

export default function Contact({ contactData: initialContactData }) {
  // =========================== USE MODAL
  const { modalIsOpen, openModal, closeModal } = UseModal();

  // =========================== USE CONTACT

  const {
    contactData,
    cardState,
    setCardState,
    previousCardState,
    editData,
    buildButtonText,
    buildModalAction,
  } = useContact(initialContactData);

  // ============================= HANDLE TEXT CLICK

  const handleTextClick = () => {
    setCardState("editing-state");
  };

  // ============================== CARD BUTTON CLICK

  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

  const handleCardButtonClick = () => {
    if (cardState !== "editing-state") {
      setCardState("deleting-state");
      openModal();
    } else if (cardState === "editing-state") {
      addContactValidationSchema
        .validate(contactData)
        .then(() => {
          openModal();
        })
        .catch(() => {
          activateErrorToastWithCustomMessage(
            "Make sure your contact has between 3 and character and number has minimum 8 characters"
          );
        });
    }
  };

  // =================================== RENDERING

  return (
    <>
      <li className={css["contact-item"]}>
        <div className={css["contact-info-wrapper"]}>
          {cardState === "editing-state" ||
          (cardState === "discarding-changes-state" &&
            previousCardState === "editing-state") ? (
            <input
              className={css["contact-input"]}
              type="text"
              value={contactData.name}
              onChange={editData}
              name="name"
              autoFocus
            />
          ) : (
            <div className={css["item-icon-box"]}>
              <CiUser className={css["contact-person-icon"]} />
              <p className={css["name-text"]} onClick={handleTextClick}>
                {contactData.name}
              </p>
            </div>
          )}
          {cardState === "editing-state" ||
          (cardState === "discarding-changes-state" &&
            previousCardState === "editing-state") ? (
            <input
              className={css["contact-input"]}
              type="number"
              name="number"
              value={contactData.number}
              onChange={editData}
              autoFocus
            />
          ) : (
            <div className={css["item-icon-box"]}>
              <CiPhone className={css["contact-phone-icon"]} />
              <p className={css["number-text"]} onClick={handleTextClick}>
                {contactData.number}
              </p>
            </div>
          )}
        </div>
        <button
          className={css["delete-button"]}
          onClick={handleCardButtonClick}
        >
          {buildButtonText()}
        </button>
      </li>
      <CustomModal
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        cardState={cardState}
        doSomething={buildModalAction()}
      />
    </>
  );
}
