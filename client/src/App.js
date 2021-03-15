import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import Pages
import Search from "./pages/Search/Search";
import Save from "./pages/Save/Save";
import NoMatch from "./pages/NoMatch/NoMatch";

// Import Components
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route exact path="/save">
            <Save />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
