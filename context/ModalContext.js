import React, { useState, createContext, useContext, useEffect } from "react";
import LoadingScreen from "../screens/LoadingScreen";

const modalContext = createContext();
export const useModal = () => useContext(modalContext);

function ModalContext({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState();
  const [loading, setLoading] = useState(false);
  const [modalType, setModalType] = useState(0);

  const closeModal = () => {
    setShowModal(false);
    setModalContent();
    setModalType(0);
  };

  const provided = {
    showModal,
    setShowModal,
    modalContent,
    setModalContent,
    setLoading,
    modalType,
    setModalType,
    closeModal,
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    if (loading) {
      setModalContent(<LoadingScreen />);
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [loading]);

  return (
    <modalContext.Provider value={provided}>{children}</modalContext.Provider>
  );
}

export default ModalContext;
