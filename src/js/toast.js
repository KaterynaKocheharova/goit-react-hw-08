import toast from "react-hot-toast";

export const activateErrorToast = (error) => {
  toast.error(`error: ${error}`, {
    duration: 2000,
    position: "top-right",
  });
};
