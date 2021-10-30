import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { ModalWrapper, Overlay } from './Modal.styled';

const Modal = ({ children, close }) => {
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        close();
      }
    });
  }, [close]);

  const closeOnOverlay = (e) => {
    if (e.target.dataset.id === 'modalWrapper') {
      return close();
    }
  };
  return (
    <>
      <Overlay></Overlay>
      <ModalWrapper onClick={closeOnOverlay} data-id='modalWrapper'>
        {children}
      </ModalWrapper>
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
};

export default Modal;
