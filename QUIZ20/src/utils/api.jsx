import axios from 'axios';

const GOOGLE_BOOKS_API = 'https://www.googleapis.com/books/v1/volumes';
const OPEN_LIBRARY_API = 'https://openlibrary.org';

export const searchBooks = async (query) => {
  return axios
    .get(`${GOOGLE_BOOKS_API}?q=${query}`)
    .then((response) => response.data.items)
    .catch((error) => {
      console.error('Error searching books:', error);
      return [];
    });
};

export const getBookDetails = async (openLibraryKey) => {
  return axios
    .get(`${OPEN_LIBRARY_API}/works/${openLibraryKey}.json`)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error getting book details:', error);
      return null;
    });
};