import { useSelector, useDispatch } from "react-redux";
import { selectIsLoading } from "../../redux/contacts/selectors";
import { updateContact } from "../../redux/contacts/operations";
import { activateErrorToast, activateSuccessToast } from "../../js/toast";
import { addContactValidationSchema } from "../../js/validation-schemas";
import BaseForm from "../common/Form/Form";
import Button from "../common/Button/Button";

const UpdateContactForm = () => {
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
      <BaseForm onSubmit={onSubmit} type="update-contact-form">
        <Button type="submit">Update Contact</Button>
      </BaseForm>
    </div>
  );
};

export default UpdateContactForm;
