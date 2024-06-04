// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import BookSearch from './pages/BookSearch';
import Bookshelf from './pages/Bookshelf';
import './App.css';

const App = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf'));
    if (storedBookshelf) {
      setBookshelf(storedBookshelf);
    }
  }, []);

  const addToBookshelf = (book) => {
    if (!bookshelf.find(b => b.key === book.key)) {
      const newBookshelf = [...bookshelf, book];
      setBookshelf(newBookshelf);
      localStorage.setItem('bookshelf', JSON.stringify(newBookshelf));
    }
  };

  return (
    <Router>
      <nav>
        <Link to="/">Search Books</Link>
        <Link to="/bookshelf">My Bookshelf</Link>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<BookSearch addToBookshelf={addToBookshelf} />} />
          <Route path="/bookshelf" element={<Bookshelf bookshelf={bookshelf} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
