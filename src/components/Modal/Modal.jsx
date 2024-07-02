// import Modal from "react-modal";
// import css from "./Modal.module.css";
// import Button from "../common/Button/Button";

// Modal.setAppElement("#App");

// const buildModalText = (cardState) => {
//   switch (cardState) {
//     case "deleting-state":
//       return "Are you sure you want to delete the contact? Click delete if so.";
//     case "name-editing-state":
//       return "Are you sure you want to edit the contact? You won't be able to get the previous version";
//     case "number-editing-state":
//       return "Are you sure you want to edit the contact? You won't be able to get the previous version";
//     case "discarding-changes-state":
//       return "Discard your changes?";
//     default:
//       return "";
//   }
// };

// const buildModalButtonText = (cardState) => {
//   switch (cardState) {
//     case "deleting-state":
//       return "delete";
//     case "name-editing-state":
//       return "update";
//     case "number-editing-state":
//       return "update";
//     case "discarding-changes-state":
//       return "discard";
//     default:
//       return "";
//   }
// };

// const CustomModal = ({ closeModal, modalIsOpen, cardState, doSomething }) => {
//   return (
//     <Modal
//       className={css.modal}
//       isOpen={modalIsOpen}
//       onRequestClose={closeModal}
//     >
//       <>
//         <div>{buildModalText(cardState)}</div>
//         <Button
//           onClick={() => {
//             closeModal();
//             doSomething();
//           }}
//           type="modal-window"
//         >
//           {buildModalButtonText(cardState)}
//         </Button>
//       </>
//     </Modal>
//   );
// };

// export default CustomModal;

import Modal from "react-modal";
import css from "./Modal.module.css";
import Button from "../common/Button/Button";

Modal.setAppElement("#App");

const buildModalText = (cardState) => {
  switch (cardState) {
    case "deleting-state":
      return "Are you sure you want to delete the contact? Click delete if so.";
    case "editing-state":
      return "Are you sure you want to edit the contact? You won't be able to get the previous version";
    default:
      return "";
  }
};

const buildModalButtonText = (cardState) => {
  switch (cardState) {
    case "deleting-state":
      return "delete";
    case "editing-state":
      return "update";
    default:
      return "";
  }
};

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
