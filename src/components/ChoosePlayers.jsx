import { useState } from 'react';

export default function ChoosePlayers({ handleSetPlayers }) {
  const [numberOfPlayers, setNumberOfPlayers] = useState(0);

  return (
    <>
      <h2 className='charm-bold'>Välj antal spelare</h2>
      <input
        type='number'
        min='2'
        max='5'
        onChange={(e) => setNumberOfPlayers(e.target.value)}
        autoFocus
        className='stoke-regular'
      />
      
      <button className='stoke-light' onClick={() => handleSetPlayers(parseInt(numberOfPlayers))}>
        Välj
      </button>
      {/* <button onClick={() => usePlayerSelection(parseInt(numberOfPlayers))}>
        Välj
      </button> */}
    </>
  );
}
