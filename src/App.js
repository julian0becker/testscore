import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Options from "./components/Options";
import Classroom from "./components/Classroom";
import Modal from "./components/Modal";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <h1 className="title">Testify</h1>
      <Options />
      <Classroom />
      <Modal />
      <Footer />
    </Provider>
  );
}

export default App;
