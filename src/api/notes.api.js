// Environment variables.
const { REACT_APP_API_BASE_URL, REACT_APP_TIMEOUT } = process.env;

// Fetch all notes from the API
export const getAllNotes = async (onFetchCallback, onErrorCallback, onLoadCallback) => {
    try {
      const response = await fetch(`${REACT_APP_API_BASE_URL}/notes`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log("getAllNotes", data);
      typeof onFetchCallback === 'function' && onFetchCallback(data);
    } catch (error) {
      typeof onErrorCallback === 'function' && onErrorCallback(error);
    } finally {
        setTimeout(() => {
          typeof onLoadCallback === 'function' && onLoadCallback(false);
        }, REACT_APP_TIMEOUT);
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
      typeof onFetchCallback === 'function' && onFetchCallback(data);
    } catch (error) {
        typeof onErrorCallback === 'function' && onErrorCallback(error);
    } finally {
        setTimeout(() => {
            typeof onLoadCallback === 'function' && onLoadCallback(false);
        }, REACT_APP_TIMEOUT);
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
      typeof onUpdateCallback === 'function' && onUpdateCallback(data);
    } catch (error) {
        typeof onErrorCallback === 'function' && onErrorCallback(error);
    } finally {
        setTimeout(() => {
            typeof onLoadCallback === 'function' && onLoadCallback(false);
        }, REACT_APP_TIMEOUT);
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
      typeof onDeleteCallback === 'function' && onDeleteCallback();
    } catch (error) {
        typeof onErrorCallback === 'function' && onErrorCallback(error);
    } finally {
        setTimeout(() => {
            typeof onLoadCallback === 'function' && onLoadCallback(false);
        }, REACT_APP_TIMEOUT);
    }
};

// Send delete request to the API
export const createNote = async (note, onPostCallback, onErrorCallback, onLoadCallback) => {
  try {
    const response = await fetch(`${REACT_APP_API_BASE_URL}/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    typeof onPostCallback === 'function' && onPostCallback();
  } catch (error) {
      typeof onErrorCallback === 'function' && onErrorCallback(error);
  } finally {
      setTimeout(() => {
          typeof onLoadCallback === 'function' && onLoadCallback(false);
      }, REACT_APP_TIMEOUT);
  }
};