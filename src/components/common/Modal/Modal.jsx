import Modal from "react-modal";
import css from "./Modal.module.css";
import Button from "../Button/Button";
import { buildModalButtonText, buildModalText } from "./ModalHelpers";

Modal.setAppElement("#App");

// then in the modal based on the type we dispatch different actions
// add go back button to close the modal


const CustomModal = ({ closeModal, modalIsOpen, onClick, type }) => {
  return (
    <Modal
      className={css.modal}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
    >
      <>
        <div>{buildModalText(type)}</div>
        <Button onClick={onClick} type="modal-window">
          {buildModalButtonText(type)}
        </Button>
      </>
    </Modal>
  );
};

export default CustomModal;
