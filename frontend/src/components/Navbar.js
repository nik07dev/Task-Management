import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        <li className="navbar-brand">
          <Link className="nav-link p-2" to="/">
            Home
          </Link>
        </li>
        <li className="navbar-brand">
          <Link className="nav-link p-2" to="/create">
            Create Task
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
