import React from "react";
import { NavLink } from "react-router-dom";

function Navigator() {
  return (
    <div className="navigator">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Fantasy Football
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
                  Current Members
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/pastchampions">
                  Past Champions
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