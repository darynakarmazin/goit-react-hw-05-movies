import React, { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  MovieDetailsPage,
  MovieDetailsDiv,
  MovieDetailsGenres,
  MovieDetailsLink,
  GoBackLink,
} from './MovieDetails.styled';
import { fetchMovies } from '../../Api/fetchMovies';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

  useEffect(() => {
    fetchMovies(url)
      .then(results => {
        setMovie(results);
      })
      .catch(err => console.error('error:' + err));
  }, [url]);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    movie && (
      <MovieDetailsPage>
        <GoBackLink to={backLinkHref}>&larr; Go back</GoBackLink>
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
        <h4>Additional information</h4>
        <ul>
          <li>
            <MovieDetailsLink to="cast">Cast</MovieDetailsLink>
          </li>
          <li>
            <MovieDetailsLink to="reviews">Reviews</MovieDetailsLink>
          </li>
        </ul>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </MovieDetailsPage>
    )
  );
}
