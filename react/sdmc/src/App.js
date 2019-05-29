import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import './App.css';
import GetAll from "./components/GetAll"


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>

          <div>
            <Route exact path="/" component={GetAll} />
          </div>

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
