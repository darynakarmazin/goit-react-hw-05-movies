import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HomeDiv, HomeTitle, HomeItem } from './Home.styled';

// const API_KEY = 'ad8ecf745f5bbe50fc648c0859fa1701';

export function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url =
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
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
      .then(({ results }) => {
        setMovies(prevResults => results);
      })
      .catch(err => console.error('error:' + err));
  }, []);

  return (
    <HomeDiv>
      <HomeTitle>Trending today</HomeTitle>
      <ul>
        {movies.map(movie => {
          console.log(movie);
          return (
            <li key={movie.id}>
              <HomeItem to={`movies/${movie.id}`}>
                <p>{movie.title}</p>
              </HomeItem>
            </li>
          );
        })}
      </ul>
    </HomeDiv>
  );
}
