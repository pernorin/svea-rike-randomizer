import React from 'react';
//  https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
export default function PlayerRandomizer({ players, setPlayers }) {
  function handleOnClick() {
    const playerArray = [...players];
    for (let i = playerArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = playerArray[i];
      playerArray[i] = playerArray[j];
      playerArray[j] = temp;
    }
    console.log(playerArray);

    setPlayers(playerArray);
  }

  return (
    <div>
      PlayerRandomizer
      <ul>
        {players.map((player, index) => {
          return (
            <li key={index}>
              {index} {player}{' '}
            </li>
          );
        })}
      </ul>
      <button onClick={handleOnClick}>Nästa omgång</button>
      {/* <p>{typeof shuffleArray}</p> */}
    </div>
  );
}
