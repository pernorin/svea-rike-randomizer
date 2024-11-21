import React, { useState } from 'react';

export default function ChoosePlayers({ handleSetPlayers }) {
  const [numberOfPlayers, setNumberOfPlayers] = useState(0);

  //const handleX = ()=> console.log(numberOfPlayers);

  const handleSelect = () => {
    handleSetPlayers(parseInt(numberOfPlayers));
  }

  return (
    <>
      <h2>Hur många spelare?</h2>
      <input
        type='number'
        min='2'
        max='5'
        onChange={(e) => setNumberOfPlayers(e.target.value)}
      />
      {/* <button onClick={handleSelect}>Välj</button> */}
      <button onClick={() => handleSetPlayers(parseInt(numberOfPlayers))}>Välj</button>
    </>
  );
}
