import { useSelector, useDispatch } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { selectError, selectIsLoading } from "../../redux/contacts/selectors";
import css from "./ContactsPage.module.css";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

const ContactsPage = () => {
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css["main-title"]}>Phonebook</h1>
      <div className={css["top-container"]}>
        <ContactForm />
        <SearchBox />
      </div>
      {isLoading && <p>Loading contacts. Please, wait</p>}
      {error && <p>{error}</p>}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
