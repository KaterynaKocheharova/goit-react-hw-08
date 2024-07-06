// import { useEffect, useRef } from "react";
// import css from "./Contact.module.css";

// const EditableText = ({
//   isEditing,
//   value,
//   handleChange,
//   name,
//   handleClick,
//   clickedInput,
// }) => {
//   // const numberInputRef = useRef(null);
//   // const nameInputRef = useRef(null);

//   // useEffect(() => {
//   //   if (isEditing && name === "number" && numberInputRef.current) {
//   //     numberInputRef.current.focus();
//   //   } else if (isEditing && name === "name" && nameInputRef.current) {
//   //     nameInputRef.current.focus();
//   //   }
//   // }, [isEditing, name]);

//   if (isEditing) {
//     return (
//       <input
//         // ref={name === "number" ? numberInputRef : nameInputRef}
//         className={css["contact-input"]}
//         type={name === "number" ? "number" : "text"}
//         value={value}
//         onChange={handleChange}
//         name={name}
//         // autoFocus

//         autoFocus={
//           (name === "number" && clickedInput === "numberInput") ||
//           (name === "name" && clickedInput === "nameInput")
//         }
//         // autoFocus={
//         //   clickedInput === "numberInput" || clickedInput === "nameInput"
//         // }
//       />
//     );
//   }

//   return (
//     <p
//       className={css[`${name}-text`]}
//       onClick={handleClick}
//       data-type={
//         name === "number" ? "numberInput" : name === "name" ? "nameInput" : ""
//       }
//     >
//       {value}
//     </p>
//   );
// };

// export default EditableText;

import { useEffect, useRef } from "react";
import css from "./Contact.module.css";

const EditableText = ({
  isEditing,
  value,
  handleChange,
  name,
  handleClick,
  clickedInput,
}) => {
  const numberInputRef = useRef(null);
  const nameInputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      if (name === "number" && clickedInput === "numberInput" && numberInputRef.current) {
        numberInputRef.current.focus();
      } else if (name === "name" && clickedInput === "nameInput" && nameInputRef.current) {
        nameInputRef.current.focus();
      }
    }
  }, [isEditing, name, clickedInput]);

  return isEditing ? (
    <input
      ref={name === "number" ? numberInputRef : nameInputRef}
      className={css["contact-input"]}
      type={name === "number" ? "number" : "text"}
      value={value}
      onChange={handleChange}
      name={name}
      autoFocus
    />
  ) : (
    <p
      className={css[`${name}-text`]}
      onClick={handleClick}
      data-type={
        name === "number" ? "numberInput" : name === "name" ? "nameInput" : ""
      }
    >
      {value}
    </p>
  );
};

export default EditableText;
