import React from 'react';
// import Logo from "./images/logo.png";
// import arrow from "./images/arrow-img.png"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import './style.scss';

import Navbar from "./components/navbar.component";
import NotesList from "./components/notes-list.component";
import EditNote from "./components/edit-note.component";
import CreateNote from "./components/create-note.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
        <Router>
          <Navbar />
          <br></br>
          <Route path="/" exact component= { NotesList } />
          <Route path="/edit/:id" component = { EditNote } />
          <Route path="/create" component = { CreateNote } />
          <Route path="/user" component = { CreateUser } />
        </Router>
  );
}

export default App;
