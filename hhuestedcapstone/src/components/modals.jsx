import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Modals = (success) => {
    const successHeader = "Success";
    const successBody= "Woohoo, You did great!";

    const failureHeader = "Fail";
    const failureBody = "Try again!";
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false); 
    const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Submit
      </Button>

      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
          <Modal.Title>{success ? successHeader:failureHeader}!</Modal.Title>
        </Modal.Header>
        <Modal.Body>{success ? successBody:failureBody}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modals;