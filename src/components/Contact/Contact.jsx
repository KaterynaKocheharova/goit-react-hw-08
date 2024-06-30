
import { useState, useRef } from "react";
import { CiUser, CiPhone } from "react-icons/ci";
import CustomModal from "../Modal/Modal";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import { activateErrorToast, activateSuccessToast } from "../../js/toast";

export default function Contact({ contactData: initialContactData }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [contactData, setContactData] = useState(initialContactData);
  const [cardState, setCardState] = useState("initial-state");
  const [previousCardState, setPreviousCardState] = useState("intitial-card-state");
  const dispatch = useDispatch();
  const buttonRef = useRef();

  // =========================== MODAL
  function openModal() {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  }

  // ========================= EDITING DATA
  const editData = (e) => {
    setContactData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  // ============================================= HANDLING BLUR
  const handleBlur = (e) => {
    if (e.relatedTarget === buttonRef.current) {
      return;
    }
    setPreviousCardState(cardState);
    setCardState("discarding-changes-state");
    openModal();
  };

  // ============================================ ACTIONS TO PASS TO THE MODAL
  const doUpdateContact = () => {
    dispatch(updateContact(contactData))
      .unwrap()
      .then(() => {
        activateSuccessToast("Contact successfully updated");
        setCardState("initial-state");
      })
      .catch((error) => activateErrorToast(error));
  };

  function doDeleteContact() {
    dispatch(deleteContact(initialContactData.id))
      .unwrap()
      .then(() => {
        activateSuccessToast("Contact successfully deleted");
      });
  }

  const DoDiscardChanges = () => {
    setContactData(initialContactData);
    setCardState("initial-state");
  };

  // ========================================== EXTRACTED FUNCTIONS
  const handleCardButtonClick = () => {
    if (cardState !== "name-editing-state" && cardState !== "number-editing-state" && cardState !== "discarding-changes-state") {
      setCardState("deleting-state");
    } else if(cardState === "discarding-changes-state" && previousCardState === "name-editing-state") {
      setCardState("name-editing-state");
    } else if(cardState === "discarding-changes-state" && previousCardState === "number-editing-state") {
      setCardState("number-editing-state");
    }
    openModal();
  };

  const buildButtonText = () => {
    return cardState === "initial-state" ? "Delete" : "Update";
  };

  const buildModalAction = () => {
    switch (cardState) {
      case "discarding-changes-state":
        return DoDiscardChanges;
      case "name-editing-state":
      case "number-editing-state":
        return doUpdateContact;
      case "deleting-state":
        return doDeleteContact;
      default:
        return null;
    }
  };

  // =================================== RENDERING

  return (
    <>
      <li className={css["contact-item"]}>
        <div className={css["contact-info-wrapper"]}>
          {cardState === "name-editing-state" ||
          cardState === "discarding-changes-state" && previousCardState === "name-editing-state" ? (
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
          cardState === "discarding-changes-state" && previousCardState === "number-editing-state" ? (
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

