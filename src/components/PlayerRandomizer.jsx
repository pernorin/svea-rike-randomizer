import React, { useRef, useState } from 'react';
//  https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
export default function PlayerRandomizer({ players, setPlayers, shufflePlayers }) {  

  const playersLength = useRef(players.length - 1);
  const list = useRef();

  function handleOnClick() {
    const playerArray = [...players];
    shufflePlayers(playerArray);
    console.log(playerArray);

    setPlayers(playerArray);
    
    playersLength.current = players.length -1;
    console.log(list.current.children);
    if (list.current.children != undefined) {
      for (let i = 0; i < list.current.children.length; i++) {
        list.current.children[i].classList.add('hide');
        console.log('x',list.current.children[i]);        
      }
    }
  }

  function handleNextPlayer() {    
    list.current.children[playersLength.current].classList.remove('hide');
    console.log(list.current.children[playersLength.current]);
    if(playersLength.current >0){
      playersLength.current = playersLength.current - 1;
    }
    
  }

  return (
    <div>
      PlayerRandomizer
      <ul ref={list}>
        {players.map((player, index) => {
          return (
            <li key={index} className='hide'>
              {index} {player}{' '}
            </li>
          );
        })}
      </ul>
      {/* <p>{players[players.length - 1]}</p> */}
      <button onClick={handleNextPlayer}>Nästa spelare</button>
      <button onClick={handleOnClick}>Nästa omgång</button>
      {/* <div>{content}</div> */}
      {/* <p>{typeof list.current.children}</p> */}
    </div>
  );
}
