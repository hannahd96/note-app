import React from 'react';
import Logo from "./images/logo.png";
import arrow from "./images/arrow-img.png"
import './App.css';
import './style.scss';

function App() {
  return (
    <div className="App">
     <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <span><img className="navbar-logo" alt="logo" src={Logo}/></span>
          <span id="brand-text">Notes</span>
            <button className="btn btn-outline-success" id="create-btn">Create</button>
        </a>
      </nav>
      <div className="col-sm-3">
        <div className="wrapper">
            <nav id="sidebar">
                <ul className="list-unstyled components">
                  <li className="active">
                    <a href="#">Groceries<img src={arrow} alt="arrow" className="arrow"></img></a>
                  </li>
                  <li>
                      <a href="#">Todos<img src={arrow} alt="arrow" className="arrow"></img></a>
                  </li>
                  <li>
                      <a href="#">Book Titles<img src={arrow} alt="arrow" className="arrow"></img></a>
                  </li>
                  <li>
                      <a href="#">Conference Details<img src={arrow} alt="arrow" className="arrow"></img></a>
                  </li>
                  <li>
                      <a href="#">Meeting Feedback<img src={arrow} alt="arrow" className="arrow"></img></a>
                  </li>
                </ul>
            </nav>
        </div>
      </div>
    </div>
  );
}

export default App;
