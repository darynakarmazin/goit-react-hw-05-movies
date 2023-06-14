import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

export function MovieDetails() {

  const { id } = useParams();

  return (
    <div>
      <h1>MovieDetails page</h1>







      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Go through the reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
