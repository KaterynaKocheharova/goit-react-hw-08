// import toast from "react-hot-toast";

// const ERROR_400_REGISTER = "It seems like the user with such data already exists";
// const ERROR_400_LOGIN = "The email or password or both are incorrect";
// const GENERIC_ERROR = "Oops. Something went wrong. Try again later. Maybe something is wrong with your internet.";
// const ALREADY_HAVE_CONTACT = "Oh. It seems like the identical contact already exists in your phonebook";
// const ALREADY_HAVE_NUMBER = "Oh. It seems you already have a contact with this number. If you want to change the name for it, consider updating a contact, not creating a new one";

// const globalParams = {
//   duration: Infinity,
//   position: "top-right",
// };

// const removeToast = (id) => {
//   toast.dismiss(id);
// };

// export const activateErrorToast = (error, formType) => {
//   const message = getErrorMessage(error, formType);
//   const toastId = toast.error(message, globalParams);
//   const clickHandler = () => {
//     removeToast(toastId);
//     document.removeEventListener("click", clickHandler);
//   };
//   document.addEventListener("click", clickHandler);
// };

// const getErrorMessage = (error, formType) => {
//   if (error === "Request failed with status code 400") {
//     switch (formType) {
//       case "register":
//         return ERROR_400_REGISTER;
//       case "login":
//         return ERROR_400_LOGIN;
//       default:
//         return GENERIC_ERROR;
//     }
//   } else if (error === "existing-contact") {
//     return ALREADY_HAVE_CONTACT;
//   } else if (error === "existing-number") {
//     return ALREADY_HAVE_NUMBER;
//   } else {
//     return GENERIC_ERROR;
//   }
// };

// export const activateSuccessToast = (message) => {
//   const toastId = toast.success(message, globalParams);
//   const clickHandler = () => {
//     removeToast(toastId);
//     document.removeEventListener("click", clickHandler);
//   };
//   document.addEventListener("click", clickHandler);
// };

import toast from "react-hot-toast";

const ERROR_400_REGISTER = "It seems like the user with such data already exists";
const ERROR_400_LOGIN = "The email or password or both are incorrect";
const GENERIC_ERROR = "Oops. Something went wrong. Try again later. Maybe something is wrong with your internet.";
const ALREADY_HAVE_CONTACT = "Oh. It seems like the identical contact already exists in your phonebook";
const ALREADY_HAVE_NUMBER = "Oh. It seems you already have a contact with this number. If you want to change the name for it, consider updating a contact, not creating a new one";

const globalParams = {
  duration: Infinity,
  position: "top-right",
};

const removeToast = (id) => {
  toast.dismiss(id);
};

let toastId;

const removeToastClickHandler = () => {
    removeToast(toastId);
    document.removeEventListener("click", removeToastClickHandler);
}

export const activateErrorToast = (error, formType) => {
  const message = getErrorMessage(error, formType);
  toastId = toast.error(message, globalParams);
  document.addEventListener("click", removeToastClickHandler);
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
  } else if (error === "existing-contact") {
    return ALREADY_HAVE_CONTACT;
  } else if (error === "existing-number") {
    return ALREADY_HAVE_NUMBER;
  } else {
    return GENERIC_ERROR;
  }
};

export const activateSuccessToast = (message) => {
  toastId = toast.success(message, globalParams);
  document.addEventListener("click", removeToastClickHandler);
};

