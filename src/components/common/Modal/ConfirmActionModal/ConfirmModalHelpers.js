
export const buildModalText = (type) => {
  switch (type) {
    case "confirming deletion":
      return "Are you sure you want to delete the contact? Click delete if so.";
    case "confirming update":
      return "Are you sure you want to edit the contact? You won't be able to get the previous version.";
    default:
      return "Do you wish to confirm your action?";
  }
};

export const buildModalButtonText = (type) => {
  switch (type) {
    case "confirming deletion":
      return "delete";
    case "confirming update":
      return "update";
    default:
      return "yes, I confirm";
  }
};

