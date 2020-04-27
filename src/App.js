import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from "./components/chatWindow.js"
/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

const initialMessages = [
  { username: 'Amy', text: 'Hi, Jon!' },
  { username: 'Amy', text: 'How are you?' },
  { username: 'John', text: 'Hi, Amy! Good, you?' },
];

class App extends Component {
 state= {
   messages: []
 }
addMessage = (username , text) => {
  this.setState ({messages: [...this.state.messages, {username,text}]})
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
           <ChatWindow  sender={users[0]}  messages={this.state.messages} addMessage={this.addMessage}/>
 		   <ChatWindow  sender={users[1]}  messages={this.state.messages} addMessage={this.addMessage}/>
        </div>
      </div>
    );
  }
}

export default App;
