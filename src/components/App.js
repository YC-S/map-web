import React from 'react';
import '../styles/App.css';
import Landing from './Landing';
import TopNavBar from "./TopNavBar"


class App extends React.Component {

  render() {
    return (
        <div className="App">
            <Landing/>
        </div>
    );
  }
}

export default App;

