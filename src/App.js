import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Blog from './Components/Blog.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Page1 from './Components/PageFit1.js';
import Error from './Components/Error.js';
import Login from './Components/Login.js';
import ThreadDisplay from './Components/Threads.jsx';
import firebase from 'firebase/app';

import 'firebase/database';

//import NavBar from './Components/NavBar.js';

class App extends Component {

  constructor(props) {
    super(props);

    const config =
    {
      apiKey: "AIzaSyAWK_NuaMuk-GoRaeArHZFKePfMeoZUyGA",
    authDomain: "latasblog-665c4.firebaseapp.com",
    databaseURL: "https://latasblog-665c4.firebaseio.com",
    projectId: "latasblog-665c4",
    storageBucket: "latasblog-665c4.appspot.com"
    };
    firebase.initializeApp(config);

    this.app = firebase;
    this.database = this.app.database();
  }


  render(){

  return (

    <div className="App">
    <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Blog} exact/>
            <Route path="/Page1" render= {(props) => < Page1 {...props} database2 = {this.database} />}/>
            <Route path="/login" render= {(props) => < Login {...props} app = {this.app} />}/>


            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
      </div>
  );
}
}

export default App;
