import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Header, Home, Speakers, Sponsors, Agenda, Footer } from "./views";

import "./styles.scss";

function App() {
  const [currentFooterHeight, setCurrentFooterHeight] = useState(500);
  const pathArray = window.location.pathname.split("/");
  const currentYear = new Date().getFullYear();
  const year = pathArray[1] || currentYear;

  const changeFooterHeight = (url) => {
    switch (url) {
      case "":
        setCurrentFooterHeight(50);
        break;
      case "about":
        setCurrentFooterHeight(48);
        break;
      case "speakers":
        setCurrentFooterHeight(48);
        break;
      case "sponsors":
        setCurrentFooterHeight(41);
        break;
      case "agenda":
        setCurrentFooterHeight(57.3);
        break;
      default:
        setCurrentFooterHeight(50);
    }
  };

  useEffect(() => {
    const pageUrl = window.location.href;
    const currentPathName = pageUrl.substr(pageUrl.lastIndexOf("/") + 1);

    changeFooterHeight(currentPathName);
  });

  return (
    <Router>
      <div className="app">
      {currentYear}
        <Header changeFooterHeight={changeFooterHeight} year={year} />
        <Switch>
          <Route exact path={`/${year}`}>
            <Home year={year} />
          </Route>
          <Route path={`/${year}/speakers`}>
            <Speakers />
          </Route>
          <Route path={`/${year}/sponsors`}>
            <Sponsors />
          </Route>
          <Route path={`/${year}/agenda`}>
            <Agenda />
          </Route>
          <Route path="/">
            <Redirect to={`/${year}`} />
          </Route>
        </Switch>
        <Footer currentFooterHeight={currentFooterHeight} />
      </div>
    </Router>
  );
}

export default App;
