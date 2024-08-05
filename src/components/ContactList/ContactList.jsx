import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ handleDeleteClick, changeCurrentId, handleUpdateContactClick }) {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css["contact-list"]}>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          contactData={contact}
          handleDeleteClick={handleDeleteClick}
          handleUpdateContactClick={handleUpdateContactClick}
          changeCurrentId={changeCurrentId}
        />
      ))}
    </ul>
  );
}
