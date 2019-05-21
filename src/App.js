import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import Options from "./components/Options";
import Classroom from "./components/Classroom";
import Modal from "./components/Modal";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <h1 className="title">Testify</h1>
        <Options />
        <Classroom />
        <Modal />
        <Footer />
      </PersistGate>
    </Provider>
  );
}

export default App;
