import Modal from "react-modal";

Modal.setAppElement("#App");

const CustomModal = ({ closeModal, modalIsOpen, type, doSomething }) => {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
      <>
        <div>
          {type === "deleteContactModal"
            ? " Are you sure you want to delete the contact. Click delete if so"
            : "Are you sure you want to edit the contact? You won't be able to get the previous version"}
        </div>
        <button
          onClick={() => {
            closeModal();
            doSomething();
          }}
        >
          {type === "deleteContactModal"
            ? "Delete the contact"
            : "UpdateContact"}
        </button>
      </>
    </Modal>
  );
};

export default CustomModal;
