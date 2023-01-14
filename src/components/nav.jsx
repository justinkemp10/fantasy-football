import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Bars3Icon } from '@heroicons/react/24/solid';
import "./Nav.css";


function Nav() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className="navigator">
      <nav className="navbar navbar-expand navbar-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src="../full-logo.png" alt="full-logo" height={220} />
          </NavLink>
          <div className="hamburger">
            <Bars3Icon className="hamburger h-6 w-6 text-blue-500" onClick={() => setIsNavExpanded(isNavExpanded => !isNavExpanded)}/>
          </div>
          <div
            className={
              isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }
          >
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

export default Nav;