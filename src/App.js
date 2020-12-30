import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Country from "./components/Country";
import GlobalPage from "./components/GlobalPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={GlobalPage} />
          <Route exact path="/:country" component={Country} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
