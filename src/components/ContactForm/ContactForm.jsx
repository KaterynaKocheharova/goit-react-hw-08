import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { activateErrorToast, activateSuccessToast } from "../../js/toast";
import BaseForm from "../common/Form/Form";
import Button from "../common/Button/Button";
import { selectContacts } from "../../redux/contacts/selectors";

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  async function handleSubmit(values, actions) {
    const duplicateContact = contacts.find(
      (item) => values.name === item.name && values.number === item.number
    );
    if (duplicateContact) {
      activateErrorToast("existing-contact");
      return;
    }

    const duplicateNumber = contacts.find(
      (item) => values.number === item.number
    );
    if (duplicateNumber) {
      activateErrorToast("existing-number");
      return;
    }

    try {
      await dispatch(addContact(values)).unwrap();
      activateSuccessToast("Contact successfully created");
      actions.resetForm();
    } catch (error) {
      activateErrorToast(error);
    }
  }

  return (
    <BaseForm onSubmit={handleSubmit} type="add-contact-form">
      <Button>Add contact</Button>
    </BaseForm>
  );
}
