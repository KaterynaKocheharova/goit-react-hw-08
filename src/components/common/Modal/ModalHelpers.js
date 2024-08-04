export const buildModalText = (type) => {
  switch (type) {
    case "delete":
      return "Are you sure you want to delete the contact? Click delete if so.";
    case "update":
      return "Are you sure you want to edit the contact? You won't be able to get the previous version.";
    case "discard":
      return "Are you sure you want to discard the changes? You won't be able to go back to them later.";
    default:
      return "Do you wish to confirm your action?";
  }
};

export const buildModalButtonText = (type) => {
  switch (type) {
    case "delete":
      return "delete";
    case "update":
      return "update";
    case "discard":
      return "discard";
    default:
      return "yes, I confirm";
  }
};
