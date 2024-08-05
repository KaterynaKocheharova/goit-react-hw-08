import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Section from "../../components/common/Section/Section";
import Container from "../../components/common/Container/Container";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import Error from "../../components/common/Error/Error";
import Loader from "../../components/common/Loader/Loader";
import { Wave } from "react-animated-text";
import { selectError, selectIsLoading } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import css from "./ContactsPage.module.css";
import { buildLoaderMessage } from "./contactsPageHelpers";
import CustomModal from "../../components/common/Modal/Modal";

const ContactsPage = () => {
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const [modalType, setModalType] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentContactId, setCurrentContactId] = useState(null);
  const [contactData, setContactData] = useState(null);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const changeCurrentId = (id) => {
    setCurrentContactId(id);
  };

  const handleDeleteContactBtnClick = () => {
    setModalType("confirming deletion");
    openModal();
  };

  const handleUpdateContactClick = (contactData) => {
    setContactData(contactData);
    setModalType("update");
    openModal();
  };

  return (
    <>
      <Section>
        <Container>
          <h1 className={css["main-title"]}>
            <Wave
              text={`Manage your contacts here - add, update or delete them!`}
              effect="color"
              effectChange="var(--extra-color)"
              speed={15}
            />
          </h1>
          <div className={css["top-container"]}>
            <ContactForm />
            <SearchBox />
          </div>
          {isLoading && <Loader>{buildLoaderMessage(isLoading)}</Loader>}
          {error && (
            <Error>
              Ooops. Something went wrong. Check out the internet connection or
              try again later.
            </Error>
          )}
          <ContactList
            handleDeleteClick={handleDeleteContactBtnClick}
            handleUpdateContactClick={handleUpdateContactClick}
            changeCurrentId={changeCurrentId}
          />
        </Container>
      </Section>
      <CustomModal
        type={modalType}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        currentContactId={currentContactId}
        contactData={contactData}
      />
    </>
  );
};

export default ContactsPage;
