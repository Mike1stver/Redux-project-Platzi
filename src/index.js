import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import "./css/icons.css";
import App from "./components/App";
import reducers from "./reducers";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

const store = createStore(
  reducers, // Aqui van a todos los reducers
  {}, // Aqui van todos los estados
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
