import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import {
  MovieDetailsPage,
  MovieDetailsDiv,
  MovieDetailsGenres,
  MovieDetailsLink,
} from './MovieDetails.styled';

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
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
        setMovie(prevResult => results);
      })
      .catch(err => console.error('error:' + err));
  }, [movieId]);

  return (
    movie && (
      <MovieDetailsPage>
        <MovieDetailsDiv>
          <img
            width="200px"
            height="300px"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
          />
          <div>
            <h2>{movie.title}</h2>
            <p>User Scrore: {Math.round(movie.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <MovieDetailsGenres>
              {movie.genres.map(genr => {
                return <p key={genr.id}>{genr.name}</p>;
              })}
            </MovieDetailsGenres>
          </div>
        </MovieDetailsDiv>
        <ul>
          <li>
            <MovieDetailsLink to="cast">Cast</MovieDetailsLink>
          </li>
          <li>
            <MovieDetailsLink to="reviews">
              Go through the reviews
            </MovieDetailsLink>
          </li>
        </ul>
        <Outlet />
      </MovieDetailsPage>
    )
  );
}
