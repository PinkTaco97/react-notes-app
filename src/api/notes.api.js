// Environment variables.
const { REACT_APP_API_BASE_URL } = process.env;

// fetch all notes from the API
export const getAllNotes = async (onFetchCallback, onErrorCallback, onLoadCallback) => {
    try {
      const response = await fetch(`${REACT_APP_API_BASE_URL}/notes`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log("fetchNotes", data);
      onFetchCallback(data);;
    } catch (error) {
        onErrorCallback(error);
    } finally {
        setTimeout(() => {
            onLoadCallback(false);
        }, 2000);
    }
  };