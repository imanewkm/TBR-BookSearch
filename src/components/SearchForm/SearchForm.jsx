import React, { useState } from 'react';
import { useGlobalContext } from '../../context';
import { FaSearch } from 'react-icons/fa';
import './SearchForm.css';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext(); // Only use setSearchTerm
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchTerm(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="search-form-elem">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books..."
          className="form-control"
        />
        <button type="submit" className="btn-search">
          <FaSearch className="text-green" size={24} />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
