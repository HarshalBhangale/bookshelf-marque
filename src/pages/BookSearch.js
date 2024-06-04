// src/pages/BookSearch.js
import React, { useState } from 'react';
import BookCard from '../components/BookCard';

const BookSearch = ({ addToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const searchBooks = async (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 2) {
      const response = await fetch(`https://openlibrary.org/search.json?q=${e.target.value}&limit=10&page=1`);
      const data = await response.json();
      setBooks(data.docs.map(book => ({
        key: book.key,
        title: book.title,
        edition_count: book.edition_count || 1
      })));
    } else {
      setBooks([]);
    }
  };

  return (
    <div>
      <h1>Search by book name:</h1>
      <input type="text" value={query} onChange={searchBooks} placeholder="Type a book name..." />
      <div className="book-results">
        {books.map((book) => (
          <BookCard key={book.key} book={book} addToBookshelf={addToBookshelf} />
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
