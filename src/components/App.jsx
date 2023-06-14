import { Routes, Route, Link } from 'react-router-dom';
import { Home } from 'pages/Home';
import { MovieDetails } from 'pages/MovieDetails';
import { Movies } from 'pages/Movies';
import { Cast } from './Cast';
import { Reviews } from './Reviews';
import { NotFound } from 'pages/NotFound';

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">import </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
