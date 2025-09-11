import React, { useRef, useState } from 'react';
import PlayerShield from './PlayerShield';
//  https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
export default function PlayerRandomizer({
  players,
  setPlayers,
  shufflePlayers,
}) {
  const [playersLength, setPlayersLength] = useState(players.length - 1);

  function handleOnClick() {
    const playerArray = [...players];

    playerArray.forEach((player) => {
      player.status = 'hidden';
    });
    shufflePlayers(playerArray);
    setPlayers(playerArray);
    setPlayersLength(players.length - 1);
  }

  function handleNextPlayer() {
    const playerArray = [...players];

    if (playersLength >= 0) {
      setPlayersLength((prev) => prev - 1);
    }
    playerArray.forEach((player) => {
      if (player.status === 'current') {
        // console.log(player);
        player.status = 'previous';
      }
    });
    // console.log(playersLength, players.length);
    // console.log('p:', players);
    // console.log(players[playersLength]);
    
    playerArray[playersLength].status = 'current';
    setPlayers(playerArray);  
  }

  /*

  Flytta funktionalitet för att sätta player array och blanda till en custom hook?

  Gör så att alla shields inte renderas om vid varje knapptryck ( sätt klasser previous och current)


  */

  return (
    <div>
      {/* PlayerRandomizer */}

      {players.map((player, index) => {
        return (
          <PlayerShield
            key={index}
            playerName={player.name}
            playerStatus={player.status}
          />
        );
      })}
      {playersLength < 0 && (
        <button autoFocus onClick={handleOnClick}>
          Nästa omgång
        </button>
      )}
      {playersLength >= 0 && (
        <button autoFocus onClick={handleNextPlayer}>
          Nästa spelare
        </button>
      )}
    </div>
  );
}
