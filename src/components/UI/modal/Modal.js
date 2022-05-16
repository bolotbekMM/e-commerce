import { Fragment } from 'react';
import ReactDom, { createPortal } from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = ({ onCloseModal }) => {
  return <div className={classes.backdrop} onClick={onCloseModal} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById('overlays');

function Modal({ onCloseModal, children }) {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onCloseModal={onCloseModal} />,
        portalElement
      )}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
}

export default Modal;
