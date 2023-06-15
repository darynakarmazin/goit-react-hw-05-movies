import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export function Movies() {
  const [query, setQuery] = useState('home along');
  const [movies, setMovies] = useState('');

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
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
        setMovies(prevResult => results);
      })
      .catch(err => console.error('error:' + err));
  }, [query]);

  console.log(movies);

  return (
    movies && (
      <>
        <div>Movies PAGE</div>
        <ul>
          {movies.results.map(result => {
            return (
              <li key={result.id}>
                <NavLink to={`${result.id}`}>
                  <p>{result.original_title}</p>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </>
    )
  );
}
