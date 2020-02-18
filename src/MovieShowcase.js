import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

class MovieShowcase extends Component {

  generateMovieCards = () => {
    
    return movieData.map(
      (movie, index) => 
        <MovieCard
          key={index}
          title={movie.title}
          IMDBRating={movie.IMDBRating}
          genres={movie.genres}
          poster={movie.poster}
        />
      // no need to have brackets around MovieCard, otherwise that is interpreted as block 
    )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}

export default MovieShowcase 