import { useState } from 'react'
import './App.css'
import Board from './components/Board.jsx'
import Scoreboard from './components/Scoreboard.jsx';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return [...array];
}

const pokemonNames = ['pikachu', 'charizard', 'bulbasaur', 'squirtle', 'ditto', 'sewaddle']
const initialPokemons = pokemonNames.map( pokemon => ({name: pokemon, clicked: false}))

function App() {
  const [pokemonArr, setPokemonArr] = useState(initialPokemons)
  const [score, setScore] = useState(0)

  function handleClick(pokemonId) {
    const pokemon = pokemonArr.find((pokemon) => pokemon.name == pokemonId)

    let newPokemonArr = shuffleArray(pokemonArr)
    if (!pokemon.clicked) {
      setScore(score + 1)
      pokemon.clicked = true

    } else {
      setScore(0)
      newPokemonArr = newPokemonArr.map( (pokemon) => {
        return {...pokemon, clicked: false}
      }
      )
    }
    setPokemonArr(newPokemonArr)

  }
 
  return (
    <>
      <Scoreboard score={score} />
      <Board cards={pokemonArr} handleClick={handleClick}/>
    </>
  )
}

export default App
