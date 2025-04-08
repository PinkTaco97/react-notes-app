// Boootstrap.
import {
  Card,
  Button
} from 'react-bootstrap';

// Utilities.
import { timeAgo } from '../../utils';

function Note({id, title, contents, created}) {

  const onDelete = () => {
    console.log('@TEST/DELETE/', id);
  }
  return (
    <div className='w-full md:w-1/2 lg:w-1/3 p-2 d-flex'>
      <Card className="d-flex flex-column w-100 h-100">
        <Card.Header className='p-3'>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-2">
              <strong>{title}</strong>
            </div>
            <div className="text-muted">
              {timeAgo.format(new Date(created))}
            </div>
          </div>
        </Card.Header>
        <Card.Body className='flex-grow-1 h-full'>
          {contents}
        </Card.Body>
        <Card.Footer className="w-full d-flex align-items-center justify-content-end gap-2 mr-auto">
          <Button variant="outline-secondary" className="btn-sm float-end">Edit</Button>
          <Button variant="outline-danger" className="btn-sm float-end" onClick={() => onDelete()}>Delete</Button>
        </Card.Footer>
      </Card>
    </div>
  );
}

  
export default Note;