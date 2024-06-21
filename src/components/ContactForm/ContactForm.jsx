import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { activateSuccessToast } from "../../js/toast";
import BaseForm from "../Form/Form";
// import { useId } from "react";

export default function ContactForm() {
  // const nameId = useId();
  // const numberId = useId();

  const dispatch = useDispatch();

  function handleSubmit(values, actions) {
    dispatch(addContact(values))
      .unwrap()
      .then(() => {
        activateSuccessToast("Contact successfully created");
      });
    actions.resetForm();
  }

  return <BaseForm onSubmit={handleSubmit} type="add-contact-form"></BaseForm>;
}
