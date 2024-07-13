import CustomModal from "../Modal/Modal";
import ContactBody from "./ContactBody";
import ContactButton from "./ContactButton";
import css from "./Contact.module.css";
import { useContact } from "../../hooks/useContact";

export default function Contact({ contactData: initialContactData }) {
  const {
    contactData,
    cardState,
    setCardState,
    editData,
    handleTextClick,
    buildButtonText,
    buildModalAction,
    clickedInputIds,
    handleCardButtonClick,
    handleDiscradingChangesClick,
    closeModal,
    modalIsOpen,
  } = useContact(initialContactData);

  const isEditing = cardState === "editing-state";

  return (
    <>
      <li className={css["contact-item"]}>
        <ContactBody
          isEditing={isEditing}
          contactData={contactData}
          editData={editData}
          handleTextClick={handleTextClick}
          clickedInputIds={clickedInputIds}
        />
        <ContactButton
          className={css["delete-button"]}
          handleClick={handleCardButtonClick}
          buttonText={buildButtonText()}
        />
        {cardState === "editing-state" && (
          <ContactButton
            handleClick={handleDiscradingChangesClick}
            buttonText="Discard"
          />
        )}
      </li>
      <CustomModal
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        cardState={cardState}
        doSomething={buildModalAction()}
        setCardState={setCardState}
        shouldCloseOnOverlayClick={
          cardState === "discarding-state" ? false : true
        }
      />
    </>
  );
}
