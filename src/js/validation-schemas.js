import * as Yup from "yup";

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password is too short - should be 8 chars minimum."),
});

const registerValidationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const addContactValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string().min(8, "Too Short!").required("Required"),
});

const getValidationSchema = (formType) => {
  switch (formType) {
    case "registration-form":
      return registerValidationSchema;
    case "login-form":
      return loginValidationSchema;
    case "add-contact-form":
      return addContactValidationSchema;
    default:
      return null;
  }
};

export default getValidationSchema;
