import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MovieCard from './MovieCard';
import MovieDetail from './MovieDetail';

import './App.css';
import SearchIcon from './search.svg';

const API_URL = process.env.REACT_APP_MOVIES_API_URL;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);

    const data = await response.json();

    setMovies(data.Search);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchMovies(searchTerm);
    }
  };

  useEffect(() => {
    searchMovies('Batman');
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="app">
            <h1>Search Movies</h1>
            <div className="search">
              <input
                placeholder="Search for movies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <img
                src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(searchTerm)}
              />
            </div>
            {movies?.length > 0 ? (
              <div className="container">
                {movies.map((movie) => (
                  <MovieCard movie={movie} key={movie.imdbID} />
                ))}
              </div>
            ) : (
              <div className="empty">
                <h2>No Movies Found!</h2>
              </div>
            )}
          </div>
        } />
        <Route path="/movie/:imdbID" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
