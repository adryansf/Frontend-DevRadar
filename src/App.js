import React from "react";
import { Provider } from "react-redux";
import store from "./store";

import "./global.css";
import "./App.css";

import DevForm from "./components/DevForm";
import Main from "./components/Main";

function App() {
  return (
    <Provider store={store}>
      <div id="app">
        <DevForm />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
