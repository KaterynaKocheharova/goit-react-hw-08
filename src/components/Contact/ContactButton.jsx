import css from "./Contact.module.css";

const ContactButton = ({ handleClick, buttonText }) => {
  return (
    <button className={css["contact-button"]} onClick={handleClick}>
      {buttonText}
    </button>
  );
}

export default ContactButton;
