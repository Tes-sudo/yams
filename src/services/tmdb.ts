// Replace with your TMDB API key
const TMDB_API_KEY = 'YOUR_TMDB_API_KEY';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

export const tmdb = {
  getImageUrl: (path: string, size: 'w500' | 'original' = 'w500') => {
    return `${IMAGE_BASE_URL}/${size}${path}`;
  },

  getTrending: async () => {
    const response = await fetch(
      `${BASE_URL}/trending/movie/week?api_key=${TMDB_API_KEY}`
    );
    return response.json();
  },

  searchMovies: async (query: string) => {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(
        query
      )}`
    );
    return response.json();
  },

  getMovieDetails: async (movieId: number) => {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}`
    );
    return response.json();
  },

  getMoviesByGenre: async (genreId: number) => {
    const response = await fetch(
      `${BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&with_genres=${genreId}`
    );
    return response.json();
  },

  getGenres: async () => {
    const response = await fetch(
      `${BASE_URL}/genre/movie/list?api_key=${TMDB_API_KEY}`
    );
    return response.json();
  },
}; 