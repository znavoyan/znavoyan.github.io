import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Header, Home, About, Speakers, Sponsors, Agenda, Footer } from './views';

import './styles.scss';

function App(props) {

  const [currentFooterHeight, setCurrentFooterHeight] = useState(500);

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
    const currenUrl = window.location.pathname.replace("/", "")
    changeFooterHeight(currenUrl);

  });

  return (
    <Router>
      <div className="app">
        <Header changeFooterHeight={changeFooterHeight} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route path="/about">
            <About />
          </Route> */}
          <Route path="/speakers">
            <Speakers />
          </Route>
          <Route path="/sponsors">
            <Sponsors />
          </Route>
          <Route path="/agenda">
            <Agenda />
          </Route>
        </Switch>
        <Footer currentFooterHeight={currentFooterHeight} />
      </div>
    </Router>

  );
}

export default App;
