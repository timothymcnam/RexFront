// app.js

// Movie data
const movies = [
  { title: 'Die Hard', genre: 'action' },
  { title: 'The Dark Knight', genre: 'action' },
  { title: 'Superbad', genre: 'comedy' },
  { title: 'The Hangover', genre: 'comedy' },
  { title: 'The Shawshank Redemption', genre: 'drama' },
  { title: 'Forrest Gump', genre: 'drama' },
  { title: 'The Conjuring', genre: 'horror' },
  { title: 'A Nightmare on Elm Street', genre: 'horror' },
  { title: 'The Notebook', genre: 'romance' },
  { title: 'La La Land', genre: 'romance' },
];

// DOM elements
const genreSelect = document.getElementById('genre');
const recommendBtn = document.getElementById('recommend-btn');
const movieList = document.getElementById('movie-list');

// Event listener for the button
recommendBtn.addEventListener('click', () => {
  const selectedGenre = genreSelect.value;

  // Filter movies based on the selected genre
  const recommendedMovies = movies.filter(movie => movie.genre === selectedGenre);

  // Clear the previous recommendations
  movieList.innerHTML = '';

  // Display new recommendations
  if (recommendedMovies.length > 0) {
    recommendedMovies.forEach(movie => {
      const movieItem = document.createElement('div');
      movieItem.classList.add('movie-item');
      movieItem.textContent = movie.title;
      movieList.appendChild(movieItem);
    });
  } else {
    movieList.innerHTML = '<p>No movies found for this genre!</p>';
  }
});
