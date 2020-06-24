import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import "./App.css";

import CakeContainer from "./components/CakeContainer";
import CreamContainer from "./components/CreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        {/* <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />
        <CreamContainer />
        <NewCakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
