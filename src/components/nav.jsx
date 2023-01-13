import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Navigator() {
  return (
    <div className="navigator">
      <nav className="navbar navbar-expand navbar-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src="../full-logo.png" alt="full-logo" height={220} />
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/rulesandregulations">
                  Rules & Regulations
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/currentmembers">
                  Members
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/pastchampions">
                  Champions
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigator;