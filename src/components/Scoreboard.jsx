import "../index.css"

export default function Scoreboard({score}) {
    return (
        <div className="scoreboard">
            <h1>Scoreboard</h1>
            <p>Score: {score}</p>
        </div>
    )
}