import React from "react";
import { movies } from "../data";


function Movies() {
  console.log("Movies ", movies)
  const MoviesJSX = movies.map((movie, index) => {
    return( 
      <div key = {index}>{movie.title}, time = {movie.time}
        <ul>Genres:
          {movie.genres.map((genre, index) => {
            return(<li key = {index}>{genre}</li>)
          }) }
      </ul>
    </div>
  )})

  console.log(MoviesJSX)

  return (
  <div>
    <h1>Movies Page</h1>
      {MoviesJSX}
  </div>
  )
}

export default Movies;
