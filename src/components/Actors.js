import React from "react";
import { actors } from "../data";

function Actors() {
  console.log("Actors ", actors)

  const actorList = actors.map((actor, index) => {
    return (
      <div key = {index}> {actor.name}
        <ul>
          {actor.movies.map((movie, index) => {
            return(<li key = {index}>{movie}</li>)
          })}
        </ul>
      </div>
 )})

  return (
    <div>
      <h1>Actors Page</h1>
      {actorList}
    </div>
  )
}
export default Actors;
