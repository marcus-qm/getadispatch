import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Send } from "react-feather";

import StatusUpdate from "./components/StatusUpdate";

const DispatchRequestModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <Send />
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>
            I will not close if you click outside me. Don't even try to press
            escape key.
          </h5>
          <StatusUpdate />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DispatchRequestModal;
