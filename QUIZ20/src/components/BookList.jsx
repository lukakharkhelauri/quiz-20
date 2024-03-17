import React from 'react';
import classes from '../modules/BookList.module.scss'; 

const BookList = ({ books, onSelectBook }) => {
  return (
    <div className={classes['book-list']}>
      {books.map((book) => (
        <div key={book.id} className={classes['book-card']} onClick={() => onSelectBook(book)}>
          {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
          )}
          <p>{book.volumeInfo.title}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;