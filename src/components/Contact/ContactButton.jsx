import css from "./Contact.module.css";

const ContactButton = ({ handleClick, buttonText }) => {
  return (
    <button className={css["delete-button"]} onClick={handleClick}>
      {buttonText}
    </button>
  );
}

export default ContactButton;
