import { useDispatch } from "react-redux";
import Modal from "react-modal";
import css from "./Modal.module.css";
import Button from "../Button/Button";
import { buildModalButtonText, buildModalText } from "./ModalHelpers";
import {
  deleteContact,
  updateContact,
} from "../../../redux/contacts/operations";
import { activateSuccessToast } from "../../../js/toast";
import UpdateContactForm from "../../UpdateContactForm/UpdateContactForm";

Modal.setAppElement("#App");

const CustomModal = ({
  closeModal,
  modalIsOpen,
  type,
  currentContactId,
  contactData,
}) => {
  const dispatch = useDispatch();

  const handleModalButtonClick = () => {
    if (type === "confirming deletion") {
      dispatch(deleteContact(currentContactId))
        .unwrap()
        .then(() => {
          activateSuccessToast("Contact successfully deleted");
        })
        .finally(() => {
          closeModal();
        });
    }

    if (type === "update") {
      dispatch(updateContact(contactData))
        .unwrap()
        .then(() => {
          activateSuccessToast("Contact successfully updated");
        })
        .finally(() => {
          closeModal();
        });
    }
  };

  const baseModalContent = (
    <>
      <div>{buildModalText(type)}</div>
      <Button onClick={handleModalButtonClick} type="modal-window">
        {buildModalButtonText(type)}
      </Button>
    </>
  );

  return (
    <Modal
      className={css.modal}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
    >
      {type !== "update" ? baseModalContent : <UpdateContactForm contactData={contactData} />}
    </Modal>
  );
};

export default CustomModal;
