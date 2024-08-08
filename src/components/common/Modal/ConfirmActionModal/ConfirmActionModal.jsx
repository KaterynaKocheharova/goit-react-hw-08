import { useDispatch } from "react-redux";
import Button from "../../Button/Button";
import { buildModalButtonText, buildModalText } from "./ConfirmModalHelpers";
import { deleteContact } from "../../../../redux/contacts/operations";
import { activateSuccessToast } from "../../../../js/toast";

const ConfirmActionModal = ({ type, contactId, closeModal }) => {
  const dispatch = useDispatch();

  const handleConfirmButtonClick = () => {
    if (type === "confirming deletion") {
      dispatch(deleteContact(contactId))
        .unwrap()
        .then(() => {
          activateSuccessToast("Contact successfully deleted");
        })
        .finally(() => {
          closeModal();
        });
    }

    // if (type === "update") {
    //   dispatch(updateContact(contactData))
    //     .unwrap()
    //     .then(() => {
    //       activateSuccessToast("Contact successfully updated");
    //     })
    //     .finally(() => {
    //       closeModal();
    //     });
    // }
  };

  return (
    <>
      <p>{buildModalText(type)}</p>
      <Button onClick={handleConfirmButtonClick} type="modal-window">
        {buildModalButtonText(type)}
      </Button>
    </>
  );
};

export default ConfirmActionModal;
