import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'


function App() {
  function handleClick() {
    console.log("clicked me!")
  }

  const pokemonArray = [
    {
      name: 'pikachu',
      handleClick: handleClick
    },
    {
      name: 'charizard',
      handleClick: handleClick
    },
    {
      name: 'bulbasaur',
      handleClick: handleClick
    },
    {
      name: 'squirtle',
      handleClick: handleClick
    }
  ];
 
  return (
    <div style={{display:"flex"}}>
      {pokemonArray.map( (pokemon) => <Card card={pokemon} key={pokemon.name}/>)}
    </div>
  )
}

export default App
