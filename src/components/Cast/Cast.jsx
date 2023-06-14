import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function Cast() {
  const { movieId } = useParams();
  const [credits, setCredits] = useState('');

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
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
        setCredits(prevResult => results);
      })
      .catch(err => console.error('error:' + err));
  }, [movieId]);

  return (
    credits && (
      <ul>
        {credits.cast.map(credit => {
          return (
            <li key={credit.id}>
              <img
                width="100px"
                height="150px"
                src={`https://image.tmdb.org/t/p/original/${credit.profile_path}`}
                alt={credit.name}
              />
              <h3>{credit.name}</h3>
              <p>{credit.character}</p>
            </li>
          );
        })}
      </ul>
    )
  );
}
