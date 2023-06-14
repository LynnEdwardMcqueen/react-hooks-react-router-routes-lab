import React from "react";
import { directors } from "../data";

function Directors( ) {
  console.log("Directors ", directors)
  return ( 
  <div>
    <h1>Directors Page</h1>
    { directors.map((director, index) => {
      return (
      <div key = {index}>{director.name} 
        <ul> {director.movies.map((movie, index) => {
          return(
            <li key= {index}>{movie}</li>
          )
        })}

        </ul>

      </div>
      )
    })}

    </div>
  
  )
}
export default Directors;
