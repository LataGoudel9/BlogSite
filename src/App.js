import React from 'react';
import logo from './logo.svg';
import './App.css';
import Blog from './Components/Blog.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Page1 from './Components/PageFit1.js';
import Error from './Components/Error.js';

//import NavBar from './Components/NavBar.js';


function App() {
  return (
    <div className="App">

    <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Blog} exact />
            <Route path="/Page1" component={Page1} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
      </div>
  );
}

export default App;
