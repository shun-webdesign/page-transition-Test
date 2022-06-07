import React, { useState } from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Gallery from "./Gallery";
import DetailPage from "./DetailPage";

import awake from "../static/awake.mp3";

import ReactAudioPlayer from "react-audio-player";

export default function App() {
  const [hasControls, setHasControls] = useState(false);
  const toggleControls = () => setHasControls((value) => !value);
  return (
    <div className="App">
      <button onClick={toggleControls}>Toggle Controls</button>
      <ReactAudioPlayer src={awake} autoPlay controls={hasControls} />
      <Router>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch location={location} key={location.pathname}>
                <Route path="/" exact component={Gallery} />
                <Route path="/image/:i" component={DetailPage} />
              </Switch>
            </AnimatePresence>
          )}
        />
      </Router>
    </div>
  );
}
