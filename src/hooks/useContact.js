import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { updateContact, deleteContact } from "../redux/contacts/operations";
import { UseModal } from "./UseModal";
import { activateSuccessToast, activateErrorToast } from "../js/toast";
import { addContactValidationSchema } from "../js/validation-schemas";
import { activateErrorToastWithCustomMessage } from "../js/toast";

export const useContact = (initialContactData) => {
  const [contactData, setContactData] = useState(initialContactData);
  const [cardState, setCardState] = useState("initial-state"); // initial-state, editing-state, deleting-state, discarding-state
  const [clickedInputIds, setClickedInputIds] = useState([]);
  const dispatch = useDispatch();

  const initialData = useRef(initialContactData);

  const initialState = cardState === "initial-state";
  const editingState = cardState === "editing-state";

  const { modalIsOpen, openModal, closeModal } = UseModal();

  // ============================= CARD TEXT CLICK - MAKING INPUT VISIBLE
  const handleTextClick = (e) => {
    const id = e.target.getAttribute("data-id");
    setClickedInputIds((prev) => [...prev, id]);
    setCardState("editing-state");
  };

    // =========================  INPUT CHANGE - EDITING DATA
    const editData = (e) => {
      setContactData((data) => ({
        ...data,
        [e.target.name]: e.target.value,
      }));
    };

   // ============================== CARD BUTTON CLICK - VALIDATION - TRIGGER MODAL
   const handleCardButtonClick = () => {
    if (initialState) {
      setCardState("deleting-state");
      openModal();
      return;
    }

    if (editingState) {
      addContactValidationSchema
        .validate(contactData)
        .then(() => {
          openModal();
        })
        .catch(() => {
          activateErrorToastWithCustomMessage(
            "Make sure your contact has between 3 and 50 characters and number has minimum 8 characters"
          );
        });
    }
  };

  // ============================ DISCARDING CHANGES BUTTON CLICK - TRIGGER MODAL
  const handleDiscradingChangesClick = () => {
    setCardState("discarding-state");
    openModal();
  };

  // ============================= ACTIONS TO PASS TO THE MODAL THAT WILL CAUSE SOME CARD CHANGES
  const doUpdateContact = () => {
    dispatch(updateContact(contactData))
      .unwrap()
      .then(() => {
        activateSuccessToast("Contact successfully updated");
        setCardState("initial-state");
        setClickedInputIds([]);
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

  function doDiscardChanges() {
    setClickedInputIds([]);
    setContactData(initialData.current);
    setCardState("initial-state");
  }

  // !!!!! ========================================== EXTRACTED FUNCTIONS

  // CONTACT HELPER FUNCTION
  const buildButtonText = () => {
    return initialState ? "Delete" : "Update";
  };


  // MODAL HELPER FUNCTION
  const buildModalAction = () => {
    switch (cardState) {
      case "editing-state":
        return doUpdateContact;
      case "deleting-state":
        return doDeleteContact;
      case "discarding-state":
        return doDiscardChanges;
      default:
        return null;
    }
  };

  return {
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
  };
};
