import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Saved from "./components/Saved";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Router>
   
        <NavBar />  

        <Switch>

            <Route>
            <NotFound/>
            </Route>

            <Route>
              <Saved/>
            </Route>            


            <Route>
              <Search/>
            </Route>

            <Route>
              <Search/>
            </Route>

        </Switch>

      <Footer/>

    </Router>
    </div>
  );
}

export default App;
