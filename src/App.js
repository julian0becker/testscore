import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Classrooms from "./components/Classrooms";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import AboutScales from "./components/AboutScales";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/classroom/:id" component={Classrooms} />
            <Route path="/about" component={About} />
            <Route path="/scales" component={AboutScales} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
