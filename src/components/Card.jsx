import { useEffect, useState } from "react"
import PropTypes from 'prop-types';
import "../index.css"

export default function Card({card}) {
    const [imageUrl, setImageUrl] = useState('')

    useEffect( () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${card.name}/`)
        .then(response => response.json())
        .then(response => setImageUrl(response["sprites"]["versions"]['generation-v']["black-white"]["animated"]["front_default"])) //response.sprites.other.showdown.front_default
    }, [card.name])

    return (
        <div onClick={card.handleClick} className="card">
            <img src={imageUrl}/>
            <p>{card.name}</p>
        </div>
    )
}

Card.propTypes = {
    card: PropTypes.shape({ 
        name: PropTypes.string, 
        handleClick: PropTypes.func 
    })
  };