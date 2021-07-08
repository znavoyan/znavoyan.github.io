import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Header, Home, Speakers, Sponsors, Agenda, Footer } from './views';

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

    const pageUrl = window.location.href;
console.log("666", pageUrl.includes('www'));
    if(pageUrl.includes('www')){
      console.log("111", pageUrl.includes('www'));
      const currentUrl = window.location.href.replace("www.", "");
      window.location.href = currentUrl;
    }

    const currentPathName = pageUrl.substr(pageUrl.lastIndexOf('/') + 1);
    const pathArray = window.location.pathname.split('/');


    if (!currentPathName) {
      const currentUrl = window.location.href.replace(`${pathArray[1]}#/`, "");
      window.history.pushState({}, null, currentUrl);
    }

    changeFooterHeight(currentPathName);

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
