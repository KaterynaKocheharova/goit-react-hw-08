import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateContact, deleteContact } from "../redux/contacts/operations";
import { activateSuccessToast, activateErrorToast } from "../js/toast";

export const useContact = (initialContactData) => {
  const [contactData, setContactData] = useState(initialContactData);
  const [cardState, setCardState] = useState("initial-state");
  const [clickedInputId, setClickedInputId] = useState(null);
  const dispatch = useDispatch();

  // ========================= EDITING DATA
  const editData = (e) => {
    setContactData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  // ============================= HANDLE TEXT CLICK
  const handleTextClick = (e) => {
    const id = e.target.getAttribute("data-id");
    setClickedInputId(id);
    setCardState("editing-state");
  };

  // ============================================ ACTIONS TO PASS TO THE MODAL
  const doUpdateContact = () => {
    dispatch(updateContact(contactData))
      .unwrap()
      .then(() => {
        activateSuccessToast("Contact successfully updated");
        setCardState("initial-state");
        setClickedInputId(null);
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

  // ========================================== EXTRACTED FUNCTIONS
  const buildButtonText = () => {
    return cardState === "initial-state" ? "Delete" : "Update";
  };

  const buildModalAction = () => {
    switch (cardState) {
      case "editing-state":
        return doUpdateContact;
      case "deleting-state":
        return doDeleteContact;
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
    clickedInputId
  };
};
