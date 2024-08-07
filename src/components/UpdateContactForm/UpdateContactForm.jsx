import {  useDispatch } from "react-redux";
import { updateContact } from "../../redux/contacts/operations";
import { activateErrorToast, activateSuccessToast } from "../../js/toast";
import { addContactValidationSchema } from "../../js/validation-schemas";

const UpdateContactForm = ({contactData}) => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    addContactValidationSchema
      .validate(values)
      .then(() => {
        dispatch(updateContact(values))
          .unwrap()
          .then(() => {
            activateSuccessToast("Contact successfully updated");
          })
          .catch((error) => {
            activateErrorToast(error.message);
          });
      })
      .catch(() => {
        activateErrorToast(
          "Make sure your contact has between 3 and 50 characters and the number has a minimum of 8 characters"
        );
      });
  };

  return (
    <div>
    {/* USE FORMIC HERE  */}
   
    </div>
  );
};

export default UpdateContactForm;
