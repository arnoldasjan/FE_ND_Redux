import React from 'react';
import { connect } from 'react-redux';
import { toggleCards, setHearted, removeHearted } from '../actions';
import {getGenreMovies, getGenres, getMostPopularMovies} from '../thunks';
import Card from './Card';
import { getImageUrl } from '../config';

class App extends React.Component {
  componentDidMount() {
    this.props.onGetGenres();
    this.props.onGetMostPopularMovies();
  }
  
  render() {

    return (
      <div className="container">
        <header>
          <div>
            {this.props.ggenres.map((gen) => (
              <button
                  onClick={() => {this.props.onGetGenreMovies(gen.id)}}
              >
                {gen.name}
              </button>
            ))}
            <br/>
          </div>
          <button
            style={{ display: 'block', margin: '0 auto' }}
            onClick={() => this.props.onToggleCards(!this.props.showCards)}
          >
            Hide movies
          </button>
        </header>
        
        {this.props.showCards
          ? (
            <div className="cards">
              {this.props.isGenreActivated ? this.props.ggenreMovies.map((card) => (
                  <Card
                      key={card.id}
                      id={card.id}
                      backgroundImage={getImageUrl(card.backdrop_path)}
                      date={card.release_date}
                      rating={card.vote_average}
                      votes={card.vote_count}
                      description={card.overview}
                      title={card.original_title}
                      hearted={this.props.hhearted.includes(card.id)}
                      putLike={this.props.onSetHearted}
                      removeLike={this.props.onRemoveHearted}
                  />
              )) : this.props.mostPopularMovies.map((card) => (
                  <Card
                      key={card.id}
                      id={card.id}
                      backgroundImage={getImageUrl(card.backdrop_path)}
                      date={card.release_date}
                      rating={card.vote_average}
                      votes={card.vote_count}
                      description={card.overview}
                      title={card.original_title}
                      hearted={this.props.hhearted.includes(card.id)}
                      putLike={this.props.onSetHearted}
                      removeLike={this.props.onRemoveHearted}
                  />
              )) }
            </div>
          )
          : null
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  showCards: state.componentState.showCards,
  mostPopularMovies: state.cards.mostPopular,
  isGenreActivated: state.cards.genreActivated,
  ggenreMovies: state.cards.genreMovies,
  ggenres: state.genres.allGenres,
  hhearted: state.hearts.hearted,
});

const mapDispatchToProps = (dispatch) => ({
  onToggleCards: (shouldShow) => dispatch(toggleCards(shouldShow)),
  onGetMostPopularMovies: () => dispatch(getMostPopularMovies()),
  onGetGenres: () => dispatch(getGenres()),
  onGetGenreMovies: (id) => dispatch(getGenreMovies(id)),
  onSetHearted: (id) => dispatch(setHearted(id)),
  onRemoveHearted: (id) => dispatch(removeHearted(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);