import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
  console.log("NavBar")
  return <div className = "navbar">
    <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add prop for activeStyle */
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>

      <NavLink
        to="/movies"
        /* add prop for activeStyle */
        activeStyle={{
          background: "darkblue",
        }}
      >
        Movies
      </NavLink>

      <NavLink
        to="/directors"
        /* add prop for activeStyle */
        activeStyle={{
          background: "darkblue",
        }}
      >
        Directors
      </NavLink>

      <NavLink
        to="/actors"
        /* add prop for activeStyle */
        activeStyle={{
          background: "darkblue",
        }}
      >
        Actors
      </NavLink>
  </div>;
}

export default NavBar;
