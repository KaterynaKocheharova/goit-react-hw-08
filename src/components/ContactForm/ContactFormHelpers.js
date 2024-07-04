import { activateErrorToast, activateSuccessToast } from "../../js/toast";

export const handleDuplicateContact = (duplicateContact) => {
  if (duplicateContact) {
    activateErrorToast("existing-contact");
    return true;
  }
  return false;
};

export const handleDuplicateNumber = (duplicateNumber) => {
  if (duplicateNumber) {
    activateErrorToast("existing-number");
    return true;
  }
  return false;
};

export const handleSuccessfulContactCreating = () => {
  activateSuccessToast("Contact successfully created");
};

export const handleContactCreationError = (error) => {
  activateErrorToast(error);
};
