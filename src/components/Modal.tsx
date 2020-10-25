import React, { ReactNode } from 'react';
import ReactModal, { Props as ReactModalProps } from 'react-modal';
import { MdClose } from 'react-icons/md';
import { useModalContext } from '../context';

ReactModal.setAppElement('body');

export type ModalType = {
  children: ReactNode;
  showToggle?: boolean;
  modalKey: string;
  isOpen?: boolean;
  locked?: boolean;
  iconStyle?: any;
} & Pick<ReactModalProps, 'style' | 'onRequestClose'>;

export const Modal = ({
  children,
  style,
  iconStyle,
  showToggle = true,
  onRequestClose,
  locked = false,
  modalKey,
  isOpen,
  ...props
}: ModalType) => {
  const { modalId, closeModal } = useModalContext();
  return (
    <ReactModal
      isOpen={isOpen === undefined ? modalId === modalKey : isOpen}
      shouldFocusAfterRender
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      shouldReturnFocusAfterClose
      onRequestClose={
        locked ? () => {} : onRequestClose === undefined ? closeModal : onRequestClose
      }
      style={{
        content: {
          position: 'relative',
          top: 'auto',
          left: 'auto',
          bottom: 'auto',
          right: 'auto',
          padding: 0,
          zIndex: 9999,
          border: 0,
          borderRadius: 4,
          maxWidth: '95%',
          maxHeight: '95%',
          ...(style && style.content),
        },
        overlay: {
          background: 'rgba(0, 0, 0, 0.5)',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 110,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          ...(style && style.overlay),
        },
      }}
      closeTimeoutMS={300}
      {...props}
    >
      {showToggle && (
        <MdClose
          data-name="close-button"
          onClick={onRequestClose === undefined ? closeModal : onRequestClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            cursor: 'pointer',
            ...iconStyle,
          }}
          size={22}
        />
      )}
      {children}
    </ReactModal>
  );
};
