import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './ModalFeedBack.module.css';

const ModalFeedBack = ({
  label, show,setShow, content, isConfirm, isClose, closeLabel, confirmLabel, closeStyle, confirmStyle}) => {
  // const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return(
  <div className={styles.ModalFeedBack} >
    {/* <!-- Button trigger modal --> */}
      {label && <button type="button" class="btn btn-primary" onClick={handleShow}>
        {label}
      </button>}

{/* <!-- Modal --> */}
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {content}
        </Modal.Body>

        <div className={`modal-footer ${styles.ModalFooter}`}>
          {isClose && <button type="button" className="btn" style={closeStyle} onClick={handleClose}>{closeLabel}</button>}
          {isConfirm && <button type="button" className="btn" style={confirmStyle}>{confirmLabel}</button>}
        </div>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
  </Modal>

  <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-sm">
          <div className="modal-content">
            <div className={`modal-header ${styles.ModalHeader}`}>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className={`modal-body ${styles.calendarContent}`}>
              You are about to delete this event
            </div>
            <div className={`modal-footer ${styles.ModalFooter}`}>
              <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Delete</button>
            </div>
          </div>
        </div>
      </div>
  </div>
)};



export default ModalFeedBack;
