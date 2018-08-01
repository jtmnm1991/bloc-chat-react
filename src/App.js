
import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import { RoomList } from './components/RoomList.js';
import { MessageList } from './components/MessageList.js';

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
  constructor(props) {
    super(props);
    this.state = {activeRoom: ""};
    this.activeRoom = this.activeRoom.bind(this);
  }

activeRoom(room) {
  this.setState({ activeRoom: room })
}

  render() {
    const showMessages = this.state.activeRoom;
    return (
      <div>
        <h1>{this.state.activeRoom.title || "Select A Room"}</h1>
        <RoomList firebase={firebase} activeRoom={this.activeRoom} />
        { showMessages ?
        (<MessageList firebase={firebase} activeRoom={this.state.activeRoom.key}/>)
        : (null)
        }
      </div>
    );
  }
}

export default App;
