import { useState } from 'react';
import './App.css';
import ChoosePlayers from './components/ChoosePlayers';
import PlayerRandomizer from './components/PlayerRandomizer';

function App() {
  // const families = ['Sture', 'Grip', 'Brahe', 'Eka', 'Tre Rosor'];
  const families = [
    { name: 'Sture', status: 'hidden' },
    { name: 'Grip', status: 'hidden' },
    { name: 'Brahe', status: 'hidden' },
    { name: 'Eka', status: 'hidden' },
    { name: 'Tre Rosor', status: 'hidden' },
  ];
  const [players, setPlayers] = useState([]);

  const shufflePlayers = (playerArray) => {
    for (let i = playerArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = playerArray[i];
      playerArray[i] = playerArray[j];
      playerArray[j] = temp;
    }
  };

  const handleSetPlayers = (numOfPlayers) => {
    let playerArray = families.toSpliced(numOfPlayers);
    shufflePlayers(playerArray);
    setPlayers(playerArray);
    console.log(playerArray);
  };

  return (
    <>
      <h1>Svea Rike</h1>
      {players.length < 1 && (
        <ChoosePlayers handleSetPlayers={handleSetPlayers} />
      )}
      {players.length > 1 && (
        <button onClick={() => setPlayers([])}>Avsluta</button>
      )}
      {players.length > 1 && (
        <PlayerRandomizer
          players={players}
          setPlayers={setPlayers}
          shufflePlayers={shufflePlayers}
        />
      )}
    </>
  );
}

export default App;
