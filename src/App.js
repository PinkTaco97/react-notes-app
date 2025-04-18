import React, { useEffect } from 'react';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Bootstrap
import { Container, Spinner } from 'react-bootstrap';

// Components
import Footer from './components/footer/footer.component';
import Header from './components/header/header.component';
import NoteList from './components/noteList/noteList.component';

// Modals
import DeleteNoteModal from './components/modals/deleteNote.modal';
import EditNoteModal from './components/modals/editNote.modal';
import NewNoteModal from './components/modals/newNote.modal';

// API
import { getAllNotes, deleteNote, createNote, updateNote } from './api/notes.api';

// State
import { useNoteStore } from './store/note.store';
import { useModalStore } from './store/modal.store';

function App() {

  // Note State.
  const {
    currentNote,
    error,
    notes,
    loading,
    setError,
    setLoading,
    setNotes,
  } = useNoteStore();

  // Modal State.
  const {
    showDeleteModal,
    showEditModal,
    showNewNoteModal,
    setShowDeleteModal,
    setShowEditModal,
    setShowNewNoteModal,
  } = useModalStore();

  useEffect(() => {
    if(loading) {
      getAllNotes(setNotes, setError, setLoading);
    }
  }, [loading, setNotes, setError, setLoading]);

  if (loading) {
    return (
      <div>
        <Header/>
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
  return (
    <div>
      <Header onNewNote={() => setShowNewNoteModal(true)}/>
      <Container className='h-[calc(100vh-112px)] w-full overflow-auto'>
        <NoteList
          notes={notes}
        />
      </Container>
      <Footer />
      <DeleteNoteModal
          show={showDeleteModal}
          onConfirm={() => deleteNote(currentNote?.id, () => {
            setShowDeleteModal(false);
            setLoading(true);
          })}
          onHide={() => setShowDeleteModal(false)}
        />
      <NewNoteModal
          show={showNewNoteModal}
          onHide={() => setShowNewNoteModal(false)}
          onConfirm={(title, contents) => createNote({title, contents}, () => {
            setShowNewNoteModal(false);
            setLoading(true);
          })}
      />
      <EditNoteModal
          show={showEditModal}
          onHide={() => setShowEditModal(false)}
          onConfirm={(id, title, contents) => updateNote({id, title, contents}, () => {
            setShowEditModal(false);
            setLoading(true);
          })}
      />
    </div>
  );
}

export default App;
