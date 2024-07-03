export const buildModalText = (cardState) => {
    switch (cardState) {
      case "deleting-state":
        return "Are you sure you want to delete the contact? Click delete if so.";
      case "editing-state":
        return "Are you sure you want to edit the contact? You won't be able to get the previous version";
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
      default:
        return "yes, I confirm";
    }
  };