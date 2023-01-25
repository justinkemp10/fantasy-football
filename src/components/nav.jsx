import React from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";


class Nav extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    //CLOSE NAV MENU ON SCROLL
    // window.onscroll = () => {
    //   document.getElementById('navbar').classList.remove('active');
    //   document.getElementById('bar').classList.toggle('clicked');
    // };

    //CLOSE NAV MENU ON CLICK
    window.onclick = (event) => {
      if (event.target !== document.getElementById('navbar') && event.target !== document.getElementById('bar')) {
        setTimeout(() => {

          document.getElementById('navbar').classList.remove('active');
          // document.getElementById('bar').classList.toggle('clicked');
        }, 300);
      }
    }

    return (
      <nav>
        <NavLink className="navbar-brand" to="/">
          <img src="../full-logo.png" alt="full-logo" height={200} />
        </NavLink>
        <div>
          <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
            <li>
              <NavLink className="active" to="/">
                Home
                <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/rulesandregulations">
                Rules
              </NavLink>
            </li>
            <li>
              <NavLink to="/currentmembers">
                Members
              </NavLink>
            </li>
            <li>
              <NavLink to="/pastchampions">
                Champions
              </NavLink>
            </li>
          </ul>
        </div>
        <div id="mobile" onClick={this.handleClick}>
          <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    );
  }
}

export default Nav;