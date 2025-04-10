import { createRef } from 'react';

// Boootstrap.
import { Modal, Button, Form } from 'react-bootstrap';

// State
import { useNoteStore } from '../../store/note.store';

function EditNoteModal({ show, onHide, onConfirm }) {

  // Refs.
  const titleRef = createRef();
  const contentRef = createRef();

  // Note State.
  const { currentNote } = useNoteStore();

  const onSubmit = () => {
    const title = titleRef.current.value;
    const content = contentRef.current.value;

    if (title && content) {
      onConfirm(currentNote.id, title, content);
    } else {
      alert('Please fill all the fields.');
    }
  }


  return (
    <Modal show={show} onHide={onHide} on centered>
      <Modal.Header closeButton>
        <Modal.Title>New Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              ref={titleRef}
              defaultValue={currentNote?.title}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Enter content"
              className='max-h-80'
              ref={contentRef}
              defaultValue={currentNote?.contents}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => onHide()}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => onSubmit()}>
          Save Note
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditNoteModal;