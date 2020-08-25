import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import App from './App';
import * as serviceWorker from './serviceWorker';
import common_am from "./translations/am/common.json";
import common_en from "./translations/en/common.json";
import { loadState } from './localStorage/localStorage';
import './index.css';

const language = loadState('language') ? loadState('language') : 'en';

i18next.init({
  interpolation: { escapeValue: false },
  lng: language,                              // language to use
  resources: {
    en: {
      common: common_en
    },
    am: {
      common: common_am
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
