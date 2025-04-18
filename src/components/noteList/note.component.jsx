// Boootstrap.
import {
  Card,
  Button
} from 'react-bootstrap';

// State.
import { useNoteStore } from '../../store/note.store';
import { useModalStore } from '../../store/modal.store';

// Utilities.
import { timeAgo } from '../../utils';

function Note({ note }) {

  // Note State.
  const { setCurrentNote } = useNoteStore();

  // Modal State.
  const { setShowDeleteModal, setShowEditModal } = useModalStore();

  const onDelete = () => {
    console.log('@TEST/DELETE/', note.id);
    setCurrentNote(note);
    setShowDeleteModal(true);
  }

  const onEdit = () => {
    console.log('@TEST/EDIT/', note.id);
    setCurrentNote(note);
    setShowEditModal(true);
  }

  return (
    <div className='w-full md:w-1/2 lg:w-1/3 p-2 d-flex'>
      <Card className="d-flex flex-column w-100 h-100">
        <Card.Header className='p-3'>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-2">
              <strong>{note.title}</strong>
            </div>
            <div className="text-muted">
              {timeAgo.format(new Date(note.created))}
            </div>
          </div>
        </Card.Header>
        <Card.Body className='flex-grow-1 h-full'>
          {note.contents}
        </Card.Body>
        <Card.Footer className="w-full d-flex align-items-center justify-content-end gap-2 mr-auto">
          <Button
            variant="outline-secondary"
            className="btn-sm float-end"
            onClick={() => onEdit()}
          >
            Edit
          </Button>
          <Button
            variant="outline-danger"
            className="btn-sm float-end"
            onClick={() => onDelete()}
          >
            Delete
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
}

  
export default Note;