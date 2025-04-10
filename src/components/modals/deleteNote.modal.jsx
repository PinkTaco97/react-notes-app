// Boootstrap.
import { Modal, Button } from 'react-bootstrap';

// State
import { useNoteStore } from '../../store/note.store';

function DeleteNoteModal({  show, onHide, onConfirm }) {

  // Note State.
  const { currentNote } = useNoteStore();
  
  return (
    <Modal show={show} onHide={onHide} on centered>
      <Modal.Header closeButton>
        <Modal.Title>Delete Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete <strong>{currentNote?.title}</strong>?
        <br/>This action cannot be undone.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => onHide()}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => onConfirm(currentNote?.id)}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteNoteModal;