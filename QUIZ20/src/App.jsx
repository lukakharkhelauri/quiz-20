import React, { useState } from 'react';
import classes from './modules/App.module.scss'; 
import { searchBooks } from './utils/api';
import BookList from './components/BookList';
import Sidebar from './components/Sidebar';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = ['Fiction', 'Non-Fiction', 'Science Fiction', 'Mystery', 'Romance'];

  const handleSearch = async () => {
    const results = await searchBooks(searchQuery);
    setBooks(results);
  };

  const handleSelectCategory = async (category) => {
    setSearchQuery(category); 
    setSelectedCategory(category);
    handleSearch(); 
  };

  return (
    <div className={classes['app']}>
      <Sidebar categories={categories} onSelectCategory={handleSelectCategory} />
      <div className={classes['content']}>
        <div className={classes['search-bar']}>
          <input
            type="text"
            placeholder="Search for books..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className={classes['button']} onClick={handleSearch}>Search</button>
        </div>
        <BookList books={books} />
      </div>
    </div>
  );
}

export default App;