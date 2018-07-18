
import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import { RoomList } from './components/RoomList.js';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBKrc0r2ucCAz-mHSrz5Uy3273wTZaD6ts",
    authDomain: "bloc-chat-react-51fe1.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-51fe1.firebaseio.com",
    projectId: "bloc-chat-react-51fe1",
    storageBucket: "bloc-chat-react-51fe1.appspot.com",
    messagingSenderId: "276212104854"
  };
  firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div>
        <RoomList firebase={firebase}/>
      </div>
    );
  }
}

export default App;
