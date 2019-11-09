export const toggleCards = (shouldShow) => ({
  type: 'toggleCards',
  shouldShow,
});

export const setMostPopularMovies = (list) => ({
  type: 'setMostPopularMovies',
  list,
});

export const setGenreMovies = (list) => ({
  type: 'setGenreMovies',
  list,
});

export const setGenres = (list) => ({
  type: 'setGenres',
  list,
});

export const setHearted = (id) => ({
  type: 'setHeart',
  id,
});

export const removeHearted = (id) => ({
  type: 'removeHeart',
  id,
});
