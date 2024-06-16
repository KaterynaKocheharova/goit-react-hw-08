import Modal from "react-modal";

Modal.setAppElement("#App");

const CustomModal = ({ closeModal, modalIsOpen, type }) => {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
      {type === "deleteContactModal" && (
        <>
          <div>
            Are you sure you want to delete the contact. Click delete if so
          </div>
          <button onClick={closeModal}>Delete the contact</button>
        </>
      )}
    </Modal>
  );
};

export default CustomModal;
