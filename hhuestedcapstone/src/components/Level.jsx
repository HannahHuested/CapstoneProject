import { useState } from 'react';
import ResistorValuesGame from './ResistorValuesGame'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Level = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Start
      </Button>

      <Offcanvas className="offcanvas" show={show} onHide={handleClose} placement='end' backdrop={false}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Lesson number</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Lesson text pulled from database, or game.
          <ResistorValuesGame/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Level;