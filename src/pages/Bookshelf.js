// src/pages/Bookshelf.js
import React from 'react';

const Bookshelf = ({ bookshelf }) => (
  <div>
    <h1>My Bookshelf</h1>
    <div className="bookshelf">
      {bookshelf.map((book) => (
        <div key={book.key} className="book-card">
          <h3>{book.title}</h3>
          <p>Edition Count: {book.edition_count}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Bookshelf;
