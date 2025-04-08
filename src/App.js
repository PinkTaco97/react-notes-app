import React, { useState, useEffect } from 'react';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Bootstrap
import Spinner from 'react-bootstrap/Spinner';

// Components
import Header from './components/header/header.component';
import NoteList from './components/noteList/noteList.component';

// Environment variables.
const { REACT_APP_API_BASE_URL } = process.env;

function App() {
  const [notes, setnotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch(`${REACT_APP_API_BASE_URL}/notes`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setnotes(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
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
      <NoteList notes={notes}/>
    </div>
  );
}

export default App;
