import React, { Component } from 'react';
import './App.css';
import Joke from './Components/Joke';
import SearchBar from './Components/SearchBar';
import JokeDetail from './Components/JokeDetail';

class App extends Component {
  render() {
    return (
      <>
        <SearchBar/>
        <Joke/>
        <JokeDetail/>
      </>
    )
  }
}

export default App;
