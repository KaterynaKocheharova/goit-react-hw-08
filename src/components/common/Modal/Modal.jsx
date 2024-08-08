import Modal from "react-modal";
import css from "./Modal.module.css";

Modal.setAppElement("#App");

const BaseModal = ({ closeModal, modalIsOpen, children }) => {
  return (
    <Modal
      className={css.modal}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
    >
      {children}
    </Modal>
  );
};

export default BaseModal;
