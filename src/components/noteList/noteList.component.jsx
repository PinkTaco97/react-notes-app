// Boootstrap.
import { Container } from 'react-bootstrap';

// Components.
import Note from './note.component';

function NoteList({ notes }) {
  return (
    <Container expand="lg" className='d-flex flex-wrap mt-3 mb-3'>
    {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
        />
      ))}
    </Container>
  );
}

  
export default NoteList;