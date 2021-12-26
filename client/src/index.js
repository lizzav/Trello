import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";

import store from "./store";

const render = Component => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
      <Provider store={store}>
        <Component />
      </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};
render(App);
if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    render(NextApp);
  });
}

reportWebVitals();
