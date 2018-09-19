import React, { Component } from "react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="dropdown">
          <a
            className="btn btn-secondary dropdown-toggle"
            href=""
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown link
          </a>

          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item" href="">
              Action
            </a>
            <a className="dropdown-item" href="">
              Another action
            </a>
            <a className="dropdown-item" href="">
              Something else here
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
