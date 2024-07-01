import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateContact, deleteContact } from "../redux/contacts/operations";
import { activateSuccessToast, activateErrorToast } from "../js/toast";

export const useContact = (initialContactData) => {
  const [contactData, setContactData] = useState(initialContactData);
  const [cardState, setCardState] = useState("initial-state");
  const [previousCardState, setPreviousCardState] = useState(
    "intitial-state"
  );

  const dispatch = useDispatch();

  // ========================= EDITING DATA
  const editData = (e) => {
    setContactData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
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

  return {
    contactData,
    cardState,
    setCardState,
    previousCardState,
    setPreviousCardState,
    editData,
    buildButtonText,
    buildModalAction,
  };
};
