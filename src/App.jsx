import { useState } from 'react';
import './App.css';
import ChoosePlayers from './components/ChoosePlayers';
import PlayersTest from './components/PlayersTest';

function App() {
  const families = ['Sture', 'Grip', 'Brahe', 'Eka', 'Tre Rosor'];

  const [players, setPlayers] = useState([]);

  const handleSetPlayers = (numOfPlayers) => {
    console.log(numOfPlayers);

    setPlayers(families.toSpliced(numOfPlayers));
    console.log(families);
  };

  const handleNextPlayer = () => {};

  return (
    <>
      <h1>Svea Rike</h1>
      {players.length < 1 && (
        <ChoosePlayers handleSetPlayers={handleSetPlayers} />
      )}
      {players.length > 1 && <PlayersTest players={players} />}
      {/* <button onClick={handleNextPlayer}>Nästa spelare</button> */}
    </>
  );
}

export default App;
