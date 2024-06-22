import { useSelector, useDispatch } from "react-redux";
import Container from "../../components/common/Container/Container";
import Section from "../../components/common/Section/Section";
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
    <Section>
      <Container>
        <h1 className={css["main-title"]}>
          Manage your contacts here - add, update or delete them!
        </h1>
        <div className={css["top-container"]}>
          <ContactForm />
          <SearchBox />
        </div>
        {isLoading && <p>Loading contacts. Please, wait</p>}
        {error && (
          <p>
            Ooops. Something went wrong. Check out the internet connection or
            try again later.
          </p>
        )}
        <ContactList />
      </Container>
    </Section>
  );
};

export default ContactsPage;
