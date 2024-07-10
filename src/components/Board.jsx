import Card from "./Card.jsx";
import "../index.css"

export default function Board({cards, handleClick}) {
    return (
        <div className="board">
            {cards.map( (card) => <Card card={card} key={card.name} handleClick={handleClick}/>)}
        </div>
    )
}