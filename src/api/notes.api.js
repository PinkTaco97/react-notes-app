// Environment variables.
const { REACT_APP_API_BASE_URL } = process.env;

// Fetch all notes from the API
export const getAllNotes = async (onFetchCallback, onErrorCallback, onLoadCallback) => {
    try {
      const response = await fetch(`${REACT_APP_API_BASE_URL}/notes`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log("getAllNotes", data);
      onFetchCallback(data);;
    } catch (error) {
        onErrorCallback(error);
    } finally {
        setTimeout(() => {
            onLoadCallback(false);
        }, 2000);
    }
};

// Fetch note from the API
export const getNote = async (id, onFetchCallback, onErrorCallback, onLoadCallback) => {
    try {
      const response = await fetch(`${REACT_APP_API_BASE_URL}/notes/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log("getNote", data);
      onFetchCallback(data);;
    } catch (error) {
        onErrorCallback(error);
    } finally {
        setTimeout(() => {
            onLoadCallback(false);
        }, 2000);
    }
};

// Send updated note to the API
export const updateNote = async (note, onUpdateCallback, onErrorCallback, onLoadCallback) => {
    try {
      const response = await fetch(`${REACT_APP_API_BASE_URL}/notes/${note.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log("updateNote", data);
      onUpdateCallback(data);;
    } catch (error) {
        onErrorCallback(error);
    } finally {
        setTimeout(() => {
            onLoadCallback(false);
        }, 2000);
    }
};

// Send delete request to the API
export const deleteNote = async (id, onDeleteCallback, onErrorCallback, onLoadCallback) => {
    try {
      const response = await fetch(`${REACT_APP_API_BASE_URL}/notes/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log("deleteNote", data);
      onDeleteCallback(data);;
    } catch (error) {
        onErrorCallback(error);
    } finally {
        setTimeout(() => {
            onLoadCallback(false);
        }, 2000);
    }
};