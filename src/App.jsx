import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Header, Home, Speakers, Sponsors, Agenda, Footer } from './views';

import './styles.scss';

function App(props) {

  const [currentFooterHeight, setCurrentFooterHeight] = useState(500);
  const year = 2021;//Get from url

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
    const currentPathName = pageUrl.substr(pageUrl.lastIndexOf('/') + 1);
    console.log('currentPathName', pageUrl.lastIndexOf('/'));
    const pathArray = window.location.pathname.split('/');

    if (!currentPathName) {
      
      // const getCurrenturl = window.location.href.replace(`${pathArray[1]}#/`, "");
      // console.log('getCurrenturl',pathArray[1]);
      // window.history.pushState({}, null, getCurrenturl);
    }

    changeFooterHeight(currentPathName);

  });

  return (
    <Router>
      <div>

        <Header changeFooterHeight={changeFooterHeight} year={year}/>

        <Switch>
                <Route exact path={`/${year}`}>
                  <Home />
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
                <Route exact path="/">
                  <Redirect to={`/${year}`} />
              </Route>
              </Switch>
        <Footer currentFooterHeight={currentFooterHeight} />
      </div>
    </Router>
    // <Router>
    //   <div className="app">
    //     <Header changeFooterHeight={changeFooterHeight} year={year}/>
    //     <Switch>
    //       <Route exact path={`/${year}`}>
            
    //       </Route>
    //       {/* <Route path="/about">
    //           <About />
    //         </Route> */}
    //         <Route path={`/${year}/speakers`}>
    //           <Speakers />
    //         </Route>
    //         <Route path={`/${year}/sponsors`}>
    //           <Sponsors />
    //         </Route>
    //         <Route path={`/${year}/agenda`}>
    //           <Agenda />
    //         </Route>
    //     </Switch>
    //     <Footer currentFooterHeight={currentFooterHeight} />
    //   </div>
    // </Router>

  );
}

export default App;
