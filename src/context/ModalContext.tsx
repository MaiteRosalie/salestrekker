import React, { createContext, useContext, useState, ReactNode } from 'react';

export const ModalContext = createContext({
  modalId: '',
  openModal: (id: string) => {},
  temporaryModal: (id: string, time?: number) => {},
  closeModal: () => {},
});
export const useModalContext = () => useContext(ModalContext);
export const ModalConsumer = ModalContext.Consumer;
export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalId, setModalId] = useState<string>('');
  const openModal = (id: string) => {
    setModalId(id);
  };
  const temporaryModal = (id: string, time: number = 3000) => {
    openModal(id);
    setTimeout(() => {
      closeModal();
    }, time);
  };
  const closeModal = () => {
    setModalId('');
  };

  return (
    <ModalContext.Provider
      value={{
        modalId,
        openModal,
        closeModal,
        temporaryModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
