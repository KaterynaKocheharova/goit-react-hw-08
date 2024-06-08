import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import { selectError, selectIsLoading } from "./redux/selectors";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import css from "./App.module.css";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

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
}
