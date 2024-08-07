import { useDispatch, useSelector } from "react-redux";
import BaseForm from "../common/Form/Form";
import Button from "../common/Button/Button";
import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";
import {
  handleDuplicateContact,
  handleDuplicateNumber,
  handleContactCreationError,
  handleSuccessfulContactCreating,
} from "./ContactFormHelpers";

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = async (values, actions) => {
    const duplicateContact = contacts.find(
      (item) => values.name === item.name && values.number === item.number
    );
    if (handleDuplicateContact(duplicateContact)) return;

    const duplicateNumber = contacts.find(
      (item) => values.number === item.number
    );
    if (handleDuplicateNumber(duplicateNumber)) return;

    try {
      await dispatch(addContact(values)).unwrap();
      handleSuccessfulContactCreating();
      actions.resetForm();
    } catch (error) {
      handleContactCreationError(error);
    }
  };

  return (
    <BaseForm onSubmit={handleSubmit} type="add-contact-form"/>
  );
}
