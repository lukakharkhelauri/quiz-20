import React from 'react';

const BookDetail = ({ book }) => {
  return (
    <div className="book-detail">
      <img src={book.coverUrl} alt={book.title} />
      <h2>{book.title}</h2>
      <p>{book.summary}</p>
    </div>
  );
};

export default BookDetail;