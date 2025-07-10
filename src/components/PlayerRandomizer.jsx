import React, { useRef, useState } from 'react';
import PlayerShield from './PlayerShield';
//  https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
export default function PlayerRandomizer({
  players,
  setPlayers,
  shufflePlayers,
}) {
  const [playersLength, setPlayersLength] = useState(players.length - 1);
  //const list = useRef();

  function handleOnClick() {
    const playerArray = [...players];
    shufflePlayers(playerArray);
    setPlayers(playerArray);
    setPlayersLength(players.length - 1);
  }

  function handleNextPlayer() {
    if (playersLength >= 0) {
      setPlayersLength((prev) => prev - 1);
    }
    // console.log(
    //   playersLength
    //   // playersLength.current,
    //   // list.current.children[playersLength.current]
    // );
  }

  return (
    <div>
      PlayerRandomizer
      {/* <ul ref={list}> */}
      {/* <ul>
        {players.map((player, index) => {
          return (
            <li
              key={index}
              className={index <= playersLength ? 'hide' : undefined}
            >
              {index} {player}{' '}
            </li>
          );
        })}
      </ul> */}
      {players.map((player, index) => {
        return (
          <PlayerShield
            key={index}
            player={player}
            hide={index <= playersLength}
          />
        );
      })}
      {playersLength < 0 && (
        <button onClick={handleOnClick}>Nästa omgång</button>
      )}
      {playersLength >= 0 && (
        <button onClick={handleNextPlayer}>Nästa spelare</button>
      )}
    </div>
  );
}
