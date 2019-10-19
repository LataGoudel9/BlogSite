import React, { Component } from "react"
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Blog from './Blog.js'



import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { makeStyles } from '@material-ui/core/styles';

firebase.initializeApp({
  apiKey: "AIzaSyAWK_NuaMuk-GoRaeArHZFKePfMeoZUyGA",
  authDomain: "latasblog-665c4.firebaseapp.com"
})


class Login extends Component {
  constructor(props){
   super(props);
   this.state = {
     isSignedIn: false,
     person: ""
 };
 }


  uiConfig = {
   signInFlow: "popup",
   signInOptions: [
     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
     firebase.auth.EmailAuthProvider.PROVIDER_ID
   ],
   callbacks: {
     signInSuccess: () => false
   }
 }
 componentDidMount = () => {
   firebase.auth().onAuthStateChanged(user => {
     this.setState({ isSignedIn: !!user })
     console.log("user", user)
   })
 }

 render() {
   return (
     <div className="Login">
       {this.state.isSignedIn ? (
         
         <span>
         <Blog user = {this.state.person}/>
           <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
           <Typography variant="h6" color="inherit" noWrap>
           Welcome {firebase.auth().currentUser.displayName} !
           </Typography>
           <Button color="inherit"component={Link} to="/">
   Explore how to LLL!
 </Button>
         </span>
       ) : (
         <StyledFirebaseAuth
           uiConfig={this.uiConfig}
           firebaseAuth={firebase.auth()}
         />
       )}
     </div>
   )
 }
}

export default Login;
