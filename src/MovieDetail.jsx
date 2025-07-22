import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_URL = process.env.REACT_APP_MOVIES_API_URL;

const MovieDetail = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      const response = await fetch(`${API_URL}&i=${imdbID}`);
      const data = await response.json();
      setMovie(data);
      setLoading(false);
    };
    fetchMovie();
  }, [imdbID]);

  if (loading) return <div style={{ color: 'white', textAlign: 'center' }}>Loading...</div>;
  if (!movie || movie.Response === 'False') return <div style={{ color: 'white', textAlign: 'center' }}>Movie not found.</div>;

  return (
    <div style={{ background: '#222', color: 'white', padding: 24, borderRadius: 8, maxWidth: 900, margin: '32px auto' }}>
      <div style={{ display: 'flex', gap: 24 }}>
        <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} style={{ width: 250, borderRadius: 8 }} />
        <div style={{ flex: 1 }}>
          <h1>{movie.Title}</h1>
          <p style={{ fontStyle: 'italic', color: '#ccc' }}>{movie.Plot}</p>
          <p><b>Genre:</b> {movie.Genre}</p>
          <p><b>Director:</b> {movie.Director}</p>
          <p><b>Actors:</b> {movie.Actors}</p>
          <p><b>Released:</b> {movie.Released}</p>
          <p><b>Runtime:</b> {movie.Runtime}</p>
          <p><b>IMDB Rating:</b> {movie.imdbRating}</p>
          <p><b>Country:</b> {movie.Country}</p>
          <p><b>Awards:</b> {movie.Awards}</p>
          <p><b>Box Office:</b> {movie.BoxOffice}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail; 