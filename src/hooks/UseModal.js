import { useState } from "react";

export const UseModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  
  function openModal() {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  }

  return { modalIsOpen, openModal, closeModal };
};
