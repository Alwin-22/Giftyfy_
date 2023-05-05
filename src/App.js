import { Provider } from "react-redux";
import { store } from "./Redux/store";
import MainApp from "./Navigations";
import React from "react";

function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}

export default App;
