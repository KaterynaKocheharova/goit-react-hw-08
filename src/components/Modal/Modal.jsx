// import Modal from "react-modal";
// import css from "./Modal.module.css";
// import Button from "../common/Button/Button";

// Modal.setAppElement("#App");

// const buildModalText = (type) => {
//   switch (type) {
//     case "deleteContactModal":
//       return " Are you sure you want to delete the contact? Click delete if so.";
//     case "editingContactModal":
//       return "Are you sure you want to edit the contact? You won't be able to get the previous version";
//     case "discardingChangesModal":
//       return "Discard your changes?";
//     default:
//       return "";
//   }
// };

// const buildModalButtonText = (type) => {
//   switch (type) {
//     case "deleteContactModal":
//       return "delete";
//     case "editingContactModal":
//       return "update";
//     case "discardingChangesModal":
//       return "discard";
//     default:
//       return "";
//   }
// }

// const CustomModal = ({ closeModal, modalIsOpen, type, doSomething }) => {
//   return (
//     <Modal
//       className={css.modal}
//       isOpen={modalIsOpen}
//       onRequestClose={closeModal}
//     >
//       <>
//         <div>
//           {buildModalText(type)}
//         </div>
//         <Button
//           onClick={() => {
//             closeModal();
//             doSomething();
//           }}
//           type="modal-window"
//         >
//           {buildModalButtonText(type)}
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

const buildModalText = (type) => {
  switch (type) {
    case "deleteContactModal":
      return "Are you sure you want to delete the contact? Click delete if so.";
    case "editingContactModal":
      return "Are you sure you want to edit the contact? You won't be able to get the previous version";
    case "discardingChangesModal":
      return "Discard your changes?";
    default:
      return "";
  }
};

const buildModalButtonText = (type) => {
  switch (type) {
    case "deleteContactModal":
      return "delete";
    case "editingContactModal":
      return "update";
    case "discardingChangesModal":
      return "discard";
    default:
      return "";
  }
};

const CustomModal = ({ closeModal, modalIsOpen, type, doSomething }) => {
  return (
    <Modal
      className={css.modal}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
    >
      <>
        <div>{buildModalText(type)}</div>
        <Button
          onClick={() => {
            closeModal();
            doSomething();
          }}
          type="modal-window"
        >
          {buildModalButtonText(type)}
        </Button>
      </>
    </Modal>
  );
};

export default CustomModal;
