import Modal from "react-modal";
import css from "./Modal.module.css";
import Button from "../common/Button/Button";

Modal.setAppElement("#App");

const CustomModal = ({ closeModal, modalIsOpen, type, doSomething }) => {
  return (
    <Modal
      className={css.modal}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
    >
      <>
        <div>
          {type === "deleteContactModal"
            ? " Are you sure you want to delete the contact? Click delete if so."
            : "Are you sure you want to edit the contact? You won't be able to get the previous version"}
        </div>
        <Button
          onClick={() => {
            closeModal();
            doSomething();
          }}
          type="modal-window"
        >
          {type === "deleteContactModal"
            ? "Delete"
            : "Update"}
        </Button>
      </>
    </Modal>
  );
};

export default CustomModal;
