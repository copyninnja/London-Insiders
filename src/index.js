import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import document from "global/document";
import { Provider } from "react-redux";
import { syncHistoryWithStore } from "react-router-redux";
import { render } from "react-dom";
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";
import ExScreen from "./component/advertisement/ExScreen.js";

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={App} />
      <Route path="/advertisement">
        <ExScreen />
      </Route>
    </BrowserRouter>
  </Provider>
);

render(<Root />, document.body.appendChild(document.createElement("div")));

//migrate to https://github.com/supasate/connected-react-router

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
