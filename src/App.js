import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';

import Navbar from "./components/Navbar.jsx";
// import RenderedCars from "./components/RenderedCars.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Homepage from "./components/Homepage.jsx";
import AddCar from "./components/AddCar.jsx";

function App() {
  return (

      <Router className = "container">
        <Navbar />
        <Route path = "/"  component = { Homepage } />
        {/* <Route path = "/inventory"  component = { RenderedCars } /> */}
        <Route path = "/aboutUs"  component = { AboutUs } />
        <Route path = "/login"  component = { Login } />
        <Route path = "/signup"  component = { Signup } />
        <AddCar />
      </Router>
    
  );
}

export default App;
