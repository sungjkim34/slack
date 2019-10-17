import React, { Component } from 'react';
import Chat from './components/chat/chat'
import SideBar from './components/side-bar/side-bar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <Chat />
      </div>
    );
  }
}

export default App;
