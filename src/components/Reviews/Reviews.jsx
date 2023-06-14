import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function Reviews() {
  const { movieId } = useParams();
  const [allReviews, setAllReviews] = useState('');

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`;
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
        setAllReviews(prevResult => results);
      })
      .catch(err => console.error('error:' + err));
  }, [movieId]);

  console.log(allReviews);
  return (
    allReviews && (
      <ul>
        {allReviews.results.map(result => {
          return (
            <li key={result.id}>
              <h3>{result.author}</h3>
              <p>{result.content}</p>
            </li>
          );
        })}
      </ul>
    )
  );
}
