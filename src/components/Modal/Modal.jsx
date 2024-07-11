import Modal from "react-modal";
import css from "./Modal.module.css";
import Button from "../common/Button/Button";
import { buildModalButtonText, buildModalText } from "./ModalHelpers";

Modal.setAppElement("#App");

const CustomModal = ({ closeModal, modalIsOpen, cardState, doSomething, setCardState, shouldCloseOnOverlayClick = true}) => {
  return (
    <Modal
      className={css.modal}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
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
        {cardState === "discarding-state" && <Button onClick={() => {
          closeModal();
          setCardState("editing-state");
        }} type="modal-window">Go back to updates</Button>}
      </>
    </Modal>
  );
};

export default CustomModal;
