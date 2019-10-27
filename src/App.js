
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movies.js';

class App extends Component {
  render() {
    return (
      <div class = "App" >
        
        <Movie title="The Fellowship of the Ring" hours="2" minutes="58"  //source={"https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"} 
        ></Movie>
        <Movie title="The Two Towers" hours="2" minutes="59" //source={"https://upload.wikimedia.org/wikipedia/en/a/ad/Lord_of_the_Rings_-_The_Two_Towers.jpg"} 
        ></Movie>
        <Movie title="The Return of the King" hours="3" minutes="21" //source={"https://upload.wikimedia.org/wikipedia/en/9/9d/Lord_of_the_Rings_-_The_Return_of_the_King.jpg"}
        ></Movie>
      
      </div>
    );
  }
}

export default App;

