export const buildLoaderMessage = (isLoading) => {
  switch (isLoading) {
    case "adding-contact":
      return "Adding a new contact. Please, wait.";
    case "deleting-contact":
      return "Deleting the contact. Please, wait.";
    case "updating-contact":
      return "Updating the contact. Please, wait.";
      case "fetching-contacts":
        return "Refreshing contacts. Please, wait.";
    default:
      return "Please, wait";
  }
};
