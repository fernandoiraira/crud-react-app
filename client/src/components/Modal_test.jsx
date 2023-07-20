import { Modal, Toggle, Button, ButtonToolbar, Placeholder } from "rsuite";
import "rsuite/dist/rsuite.min.css";

function Modal_test({ titulo, contenido, onOk, onClose, isOpen }) {
  return (
    <>
      <Modal overflow={true} open={isOpen} backdrop={true}>
        <Modal.Header>
          <Modal.Title>{titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{contenido}</Modal.Body>
        <Modal.Footer>
          <Button appearance="primary">Ok</Button>
          <Button appearance="subtle" onClick={onClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modal_test;
