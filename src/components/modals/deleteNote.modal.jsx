// Boootstrap.
import { Modal, Button } from 'react-bootstrap';

function DeleteNoteModal({  show, onHide, onConfirm, note }) {
  return (
    <Modal show={show} onHide={onHide} on centered>
      <Modal.Header closeButton>
        <Modal.Title>Delete Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete <strong>{note?.title}</strong>? This action cannot be undone.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => onHide()}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => onConfirm(note?.id)}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteNoteModal;