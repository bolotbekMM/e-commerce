import { Fragment } from 'react';
import ReactDom, { createPortal } from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = ({ hideSuccessModal }) => {
  return <div className={classes.backdrop} onClick={hideSuccessModal} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById('overlays');

function Modal2({ hideSuccessModal, children }) {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop hideSuccessModal={hideSuccessModal} />,
        portalElement
      )}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
}

export default Modal2;
