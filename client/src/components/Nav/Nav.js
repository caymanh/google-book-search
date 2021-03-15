import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar justify-content-start">
          <Link
            to="/"
            className={
              window.location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            <strong>Google Books</strong>
          </Link>
          <Link
            to="/"
            className={
              window.location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            Search
          </Link>
          <Link
            to="/save"
            className={
              window.location.pathname === "/save"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Save
          </Link>
        </nav>
      </div>
    );
  }
}

export default Nav;
