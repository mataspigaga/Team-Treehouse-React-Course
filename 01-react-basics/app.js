const players = [
  {
    name: "Guil",
    id: 1,
  },
  {
    name: "Treasure",
    id: 2,
  },
  {
    name: "Ashley",
    id: 3,
  },
  {
    name: "James",
    id: 4,
  },
];

const { useState } = React;

const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
};

const Player = (props) => {
  return (
    <div className="player">
      <button className="remove-player" onClick={props.removePlayer} >
        ✖
      </button>
      <span className="player-name">{props.name}</span>
      <Counter />
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={decrement}>
        {" "}
        -{" "}
      </button>
      <span className="counter-score">{count}</span>
      <button className="counter-action increment" onClick={increment}>
        {" "}
        +{" "}
      </button>
    </div>
  );
};

const App = (props) => {
  const [playerList, setPlayerList] = useState(props.initialPlayers);
  console.log(playerList)

  const removePlayerHandler = (id) => {
    console.log()
  }; 


  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={playerList.length} />

      {/* Player's list */}
      {playerList.map((player) => (
        <Player
          name={player.name}
          id={player.id}
          key={player.id.toString()}
          removePlayer={removePlayerHandler}
        />
      ))}
    </div>
  );
};

ReactDOM.render(<App initialPlayers={players} />, document.getElementById("root"));
