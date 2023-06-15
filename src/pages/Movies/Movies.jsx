import { Searchbar } from 'components/Searchbar/Searchbar';
import React, { useEffect, useState } from 'react';
import { MoviesItem, MoviesTitle } from './Movies.styled';

export function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState('');

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDhlY2Y3NDVmNWJiZTUwZmM2NDhjMDg1OWZhMTcwMSIsInN1YiI6IjY0ODhjMTU2ZDJiMjA5MDBjYTIxNzA5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4vxGV4kBszJbv90PYcnQ1DUyBmnKxmAR_P1khjcXgUk',
      },
    };

    fetch(url, options)
      .then(res => res.json())
      .then(results => {
        setMovies(results);
      })
      .catch(err => console.error('error:' + err));
  }, [searchQuery]);

  const handleFormSubmit = searchQuery => {
    setSearchQuery(searchQuery);
  };

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      {movies && (
        <ul>
          {movies.results.map(result => {
            return (
              <MoviesTitle key={result.id}>
                <MoviesItem to={`${result.id}`}>
                  <p>{result.original_title}</p>
                </MoviesItem>
              </MoviesTitle>
            );
          })}
        </ul>
      )}
    </>
  );
}
