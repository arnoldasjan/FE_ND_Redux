import { combineReducers } from 'redux';

const initialState = {
  showCards: true,
};

const componentState = (state = initialState, action) => {
  switch (action.type) {
    case 'toggleCards': return {
      ...state,
      showCards: action.shouldShow,
    };
    default: return state;
  }
};

const initialStateOfCards = {
  mostPopular: [],
  genreMovies: [],
  genreActivated: false,
};

const cards = (state = initialStateOfCards, action) => {
  switch (action.type) {
    case 'setMostPopularMovies': return {
      ...state,
      mostPopular: action.list,
      genreActivated: false,
    };
    case 'setGenreMovies': return {
      ...state,
      genreMovies: action.list,
      genreActivated: true,
    };
    default: return state;
  }
};

const stateOfGenres = {
  allGenres: [],
}

const genres = (state = stateOfGenres, action) => {
  switch (action.type) {
    case 'setGenres': return {
      ...state,
      allGenres: action.list,
    };
    default: return state;
  }
};

const stateOfHearted = {
  hearted: [],
}

const hearts = (state = stateOfHearted, action) => {
  switch (action.type) {
    case 'setHeart': return {
      ...state,
      hearted: state.hearted.concat(action.id),
    };
    case 'removeHeart': return {
      ...state,
      hearted: state.hearted.filter(item => item !== action.id),
    };
    default: return state;
  }
};

export const rootReducer = combineReducers({
  componentState,
  cards,
  genres,
  hearts,
});
