import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Nav,
  Footer,
  Home,
  Rules,
  Members,
  Champions,
} from "./components";

ReactDOM.render(
  <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rulesandregulations" element={<Rules />} />
      <Route path="/currentmembers" element={<Members />} />
      <Route path="/pastchampions" element={<Champions />}>
      </Route>
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);