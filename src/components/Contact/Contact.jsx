import CustomModal from "../Modal/Modal";
import ContactButton from "./ContactButton";
import EditableText from "./EditableText";
import css from "./Contact.module.css";
import { useContact } from "../../hooks/useContact";
import { CiUser, CiPhone } from "react-icons/ci";

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
        <div className={css["contact-info-wrapper"]}>
          <div className={css["editable-input"]}>
            <CiUser className={css["contact-person-icon"]} />
            <EditableText
              clickedInputIds={clickedInputIds}
              type="name-text"
              isEditing={isEditing}
              value={contactData.name}
              handleChange={editData}
              name="name"
              handleClick={handleTextClick}
              id="name"
            />
          </div>
          <div className={css["editable-input"]}>
            <CiPhone className={css["contact-phone-icon"]} />
            <EditableText
              clickedInputIds={clickedInputIds}
              type="number-text"
              isEditing={isEditing}
              value={contactData.number}
              handleChange={editData}
              name="number"
              handleClick={handleTextClick}
              id="number"
            />
          </div>
        </div>
        <ContactButton
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
