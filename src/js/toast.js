import toast from "react-hot-toast";

const ERROR_400_REGISTER = "It seems like the user with such data already exists";
const ERROR_400_LOGIN = "The email or password or both are incorrect";
const GENERIC_ERROR = "Oops. Something went wrong. Try again later. Maybe something is wrong with your internet.";

export const activateErrorToast = (error, formType) => {
  const message = getErrorMessage(error, formType);
  
  toast.error(message, {
    duration: 2000,
    position: "top-right",
  });
};

const getErrorMessage = (error, formType) => {
  if (error === "Request failed with status code 400") {
    switch (formType) {
      case "register":
        return ERROR_400_REGISTER;
      case "login":
        return ERROR_400_LOGIN;
      default:
        return GENERIC_ERROR;
    }
  } else {
    return GENERIC_ERROR;
  }
};
