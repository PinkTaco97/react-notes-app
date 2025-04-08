import React, { useState, useEffect } from 'react';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Bootstrap
import { Container, Spinner } from 'react-bootstrap';

// Components
import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import NoteList from './components/noteList/noteList.component';

// Modals
import DeleteNoteModal from './components/modals/deleteNoteModal/deleteNote.modal';

// API
import { getAllNotes, deleteNote } from './api/notes.api';


function App() {
  const [notes, setnotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentNote, setCurrentNote] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    getAllNotes(setnotes, setError, setLoading);
  }, []);

  if (loading) {
    return (
      <div>
        <Header />
        <Container className='h-[calc(100vh-112px)] w-100 overflow-auto flex justify-center'>
          <Spinner className="m-10" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Container>
        <Footer />
      </div>
    );
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (notes.length === 0) {
    return <div>No notes available</div>;
  }
  return (
    <div>
      <Header />
      <Container className='h-[calc(100vh-112px)] w-full overflow-auto'>
        <NoteList
          notes={notes}
          setCurrentNote={setCurrentNote}
          setShowDeleteModal={setShowDeleteModal}
        />
      </Container>
      <Footer />
      <DeleteNoteModal
          show={showDeleteModal}
          onConfirm={() => deleteNote(currentNote?.id, () => setShowDeleteModal(false))}
          onHide={() => setShowDeleteModal(false)}
        />
    </div>
  );
}

export default App;
