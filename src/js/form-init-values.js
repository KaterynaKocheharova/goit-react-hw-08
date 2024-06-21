const loginInitialValues = {
  email: "",
  password: "",
};

const registerInitialValues = {
  ...loginInitialValues,
  name: "",
};

const addContactFormInitialValues = {
  name: "",
  number: "",
};

const getInitialValues = (formType) => {
  switch (formType) {
    case "registration-form":
      return registerInitialValues;
    case "login-form":
      return loginInitialValues;
    case "add-contact-form":
      return addContactFormInitialValues;
    default:
      return null;
  }
};

export default getInitialValues;
