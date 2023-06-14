import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export function MovieDetails() {
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
