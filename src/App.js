import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, Footer, Home, Rules, Members, Champions } from "./components";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/rulesandregulations" exact component={() => <Rules />} />
          <Route path="/currentmembers" exact component={() => <Members />} />
          <Route path="/pastchampions" exact component={() => <Champions />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
