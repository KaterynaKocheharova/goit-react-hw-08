import { useRef } from "react";
import { CiUser, CiPhone } from "react-icons/ci";
import CustomModal from "../Modal/Modal";
import css from "./Contact.module.css";
import { UseModal } from "../../hooks/UseModal";
import { useContact } from "../../hooks/useContact";

export default function Contact({ contactData: initialContactData }) {
  // =========================== USE MODAL
  const { modalIsOpen, openModal, closeModal } = UseModal();
  const buttonRef = useRef();

  // =========================== USE CONTACT

  const {
    contactData,
    cardState,
    setCardState,
    previousCardState,
    setPreviousCardState,
    editData,
    buildButtonText,
    buildModalAction,
  } = useContact(initialContactData);

  // ========================= HANDLING BLUR

  const handleBlur = (e) => {
    if (e.relatedTarget === buttonRef.current) {
      return;
    }
    setPreviousCardState(cardState);
    setCardState("discarding-changes-state");
    openModal();
  };

  // ============================== CARD BUTTON CLICK

  const handleCardButtonClick = () => {
    if (
      cardState !== "name-editing-state" &&
      cardState !== "number-editing-state" &&
      cardState !== "discarding-changes-state"
    ) {
      setCardState("deleting-state");
    } else if (
      cardState === "discarding-changes-state" &&
      previousCardState === "name-editing-state"
    ) {
      setCardState("name-editing-state");
    } else if (
      cardState === "discarding-changes-state" &&
      previousCardState === "number-editing-state"
    ) {
      setCardState("number-editing-state");
    }
    openModal();
  };

  // =================================== RENDERING

  return (
    <>
      <li className={css["contact-item"]}>
        <div className={css["contact-info-wrapper"]}>
          {cardState === "name-editing-state" ||
          (cardState === "discarding-changes-state" &&
            previousCardState === "name-editing-state") ? (
            <input
              className={css["contact-input"]}
              type="text"
              value={contactData.name}
              onChange={editData}
              name="name"
              onBlur={handleBlur}
              autoFocus
            />
          ) : (
            <div className={css["item-icon-box"]}>
              <CiUser className={css["contact-person-icon"]} />
              <p
                className={css["name-text"]}
                onClick={() => setCardState("name-editing-state")}
              >
                {contactData.name}
              </p>
            </div>
          )}
          {cardState === "number-editing-state" ||
          (cardState === "discarding-changes-state" &&
            previousCardState === "number-editing-state") ? (
            <input
              className={css["contact-input"]}
              type="number"
              name="number"
              value={contactData.number}
              onChange={editData}
              autoFocus
              onBlur={handleBlur}
            />
          ) : (
            <div className={css["item-icon-box"]}>
              <CiPhone className={css["contact-phone-icon"]} />
              <p
                className={css["number-text"]}
                onClick={() => setCardState("number-editing-state")}
              >
                {contactData.number}
              </p>
            </div>
          )}
        </div>
        <button
          ref={buttonRef}
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
