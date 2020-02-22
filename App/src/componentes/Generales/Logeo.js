import React, { Component } from 'react'
import axios from 'axios'
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
    apiKey: "AIzaSyAZK84kQPSRI_N2-4zJ5oSePP44cinExvE",
    authDomain: "ecommerce-mate.firebaseapp.com"
  })
  
  class Logeo extends Component {
    
    state = { 
      isSignedIn: false,
      usuario: [{}],  
      estado: false,
      usuario2: [{}],
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

    buscarUsuario(){
      axios({
        "method" : "GET",
        "url": "http://localhost:5000/cuenta",
        "params": {
            "email": firebase.auth().currentUser.email
          }
      })
      .then((Response) => {
        const usuario = Response
        this.setState({usuario: usuario.data})
      })
      .catch((error)=>{
          console.log(error)
        })
    }

  altaUsuario(){
    if(firebase.auth().currentUser.photoURL!==null){
      axios({
        "method" : "POST",
        "url": "http://localhost:5000/cuenta",
        "params": {
            "email": firebase.auth().currentUser.email,
            "nombreuser": firebase.auth().currentUser.displayName,
            "urlfoto": firebase.auth().currentUser.photoURL,
        }
      }).then((response)=> {
        console.log(response);
      })
    .catch((error)=> {
        console.log(error);
    });
    }else{
      axios({
        "method" : "POST",
        "url": "http://localhost:5000/cuenta",
        "params": {
            "email": firebase.auth().currentUser.email,
            "nombreuser": firebase.auth().currentUser.displayName,
            "urlfoto": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpedjWjUrlWADCVqL1RICYNhuNNAWId7cUQBMdGdG8lWbPY1Cj",
        }
      }).then((response)=> {
        console.log(response);
      })
    .catch((error)=> {
        console.log(error);
    });
    }
  }

    componentDidMount = () => {
      localStorage.setItem('usuario',JSON.stringify(this.state.usuario2))
      firebase.auth().onAuthStateChanged(user => {
        this.setState({ isSignedIn: !!user })
        if(this.state.isSignedIn){
          this.buscarUsuario()
          setTimeout(function() {
          if(this.state.usuario.length===0){
            this.altaUsuario()
            }
          }.bind(this), 1000)
          setTimeout(function() {
              this.buscarUsuario()
            }.bind(this), 2000)
          setTimeout(function() {
            localStorage.setItem('usuario',JSON.stringify(this.state.usuario))
              this.props.usuarioLogeado(this.state.usuario)
          }.bind(this), 3000)
      }})
    }
  
    render() {
      return (
        <div> 
          <div className="App">
            {this.state.isSignedIn ? (
              // <span>
              //   <div>Signed In!</div>
              //   {/* <button onClick={() => firebase.auth().signOut()}>Sign out!</button> */}
              //   <button onClick={() => firebase.auth().signOut().then(function() {
              //       window.location.replace('/login');
              //     }).catch(function(error) {
              //       console.log("An error happened")
              //     })}>Sign out!</button>
              //   <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
              //   <h3>Email: {firebase.auth().currentUser.email}</h3>
              //   <img
              //     alt="profile picture"
              //     src={firebase.auth().currentUser.photoURL}
              //   />
              // </span>
              <div class="container">  
              <div class="row">               
                <div class="col-md-8">
                  <img class="img-fluid"
                  alt="profile picture"
                  height="280"
                  width="280"
                  src={firebase.auth().currentUser.photoURL}/>
                </div>
                <div class="col-md-4">
                  <h1>¡Bienvenido!</h1>
                  <h4></h4>
                  <h3 class="my-3">Email:</h3>
                  <h5 class="my-3">{firebase.auth().currentUser.email} </h5>
                  <h6></h6>
                  <h3 class="my-3">Usuario:</h3>
                  <h5 class="my-3">{firebase.auth().currentUser.displayName} </h5>

                  <h6> </h6>
                  <button className="btn btn-primary" onClick={() => firebase.auth().signOut().then(function() {
                    console.log("cerro")
                    window.location.reload()
                  }).catch(function(error) {
                    console.log("An error happened")
                  })}>Cerrar sesion</button>
                </div>

              </div>    

              </div>
            ) : (
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
            )}
          </div>
        </div>
      )
    }
  }
export default Logeo;