export const buildModalText = (cardState) => {
  switch (cardState) {
    case "deleting-state":
      return "Are you sure you want to delete the contact? Click delete if so.";
    case "editing-state":
      return "Are you sure you want to edit the contact? You won't be able to get the previous version.";
    case "discarding-state":
      return "Are you sure you want to discard the changes? You won't be able to go back to them later.";
    default:
      return "Do you wish to confirm your action?";
  }
};

export const buildModalButtonText = (cardState) => {
  switch (cardState) {
    case "deleting-state":
      return "delete";
    case "editing-state":
      return "update";
    case "discarding-state":
      return "discard";
    default:
      return "yes, I confirm";
  }
};
