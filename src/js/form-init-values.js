const loginInitialValues = {
  email: "",
  password: "",
};

const registerInitialValues = {
  ...loginInitialValues,
  name: "",
};

const contactFormInitialValues = {
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
      return contactFormInitialValues;
    case "update-contact-form":
      return contactFormInitialValues;
    default:
      contactFormInitialValues;
  }
};

export default getInitialValues;
