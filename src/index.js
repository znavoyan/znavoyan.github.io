import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { loadState } from './localStorage/localStorage';
import './index.css';

const pathArray = window.location.pathname.split('/');
const currentYear = new Date().getFullYear();
const year = pathArray[1] || currentYear;
const language = loadState('language') ? loadState('language') : 'en';

import(`./data/am/common_${year}.json`).then((common_am) => {
 
  import(`./data/en/common_${year}.json`).then((common_en) => {
  
    i18next.init({
      interpolation: { escapeValue: false },
      lng: language,// language to use
      resources: {
        am: {
          common: common_am
        },
        en: {
          common: common_en
        },
      },
    });
    
  });
  
});

ReactDOM.render(
  <React.Suspense fallback={<div>Loading... </div>}>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.Suspense>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
