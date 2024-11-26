import { useCallback, useEffect, useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [, setModalProps] = useState({});

  const handleModalOpen = useCallback(
    (props?: number) => {
      if (props) {
        setModalProps(props);
      }
      setIsOpen(true);
    },
    [setIsOpen],
  );

  const handleModalClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && isOpen) {
        e.preventDefault();
        handleModalClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if ((e.target as HTMLElement).classList.contains("overlay")) {
        handleModalClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, handleModalClose]);

  return {
    isOpen,
    // isNavigate,
    handleModalOpen,
    handleModalClose,
  };
};
