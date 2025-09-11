import { useState } from 'react';

export default function ChoosePlayers({ handleSetPlayers }) {
  const [numberOfPlayers, setNumberOfPlayers] = useState(0);

  return (
    <>
      <h2>Hur många spelare?</h2>
      <input
        type='number'
        min='2'
        max='5'
        onChange={(e) => setNumberOfPlayers(e.target.value)}
      />
      <button onClick={() => handleSetPlayers(parseInt(numberOfPlayers))}>
        Välj
      </button>
      {/* <button onClick={() => usePlayerSelection(parseInt(numberOfPlayers))}>
        Välj
      </button> */}
    </>
  );
}
