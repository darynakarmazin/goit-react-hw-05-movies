import React, { useState } from 'react';
import { SearchbarHeader, SearchForm } from './Searchbar.styled';

export function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleQueryChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchQuery.trim() === '') {
      return;
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <SearchbarHeader>
      <SearchForm onSubmit={handleSubmit} className="form">
        <button type="submit" className="button">
          <span className="button-label">&#128269;</span>
        </button>

        <input
          onChange={handleQueryChange}
          value={searchQuery}
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search Movies"
        />
      </SearchForm>
    </SearchbarHeader>
  );
}
