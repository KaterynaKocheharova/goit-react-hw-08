import Modal from "react-modal";
import css from "./Modal.module.css";
import Button from "../common/Button/Button";
import { buildModalButtonText, buildModalText } from "./ModalHelpers";

Modal.setAppElement("#App");

const CustomModal = ({ closeModal, modalIsOpen, cardState, doSomething }) => {
  return (
    <Modal
      className={css.modal}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
    >
      <>
        <div>{buildModalText(cardState)}</div>
        <Button
          onClick={() => {
            closeModal();
            doSomething();
          }}
          type="modal-window"
        >
          {buildModalButtonText(cardState)}
        </Button>
      </>
    </Modal>
  );
};

export default CustomModal;
