import React, { useRef, useState } from 'react';
//  https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
export default function PlayerRandomizer({ players, setPlayers }) {
  //const [content, setContent] = useState('');

  const playersLength = useRef(players.length - 1);

  const list = useRef();

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
    //setContent('')
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
    /*
     console.log('före' ,playersLength.current);
    if (playersLength.current > 0) {
      setContent((prev) => (prev += `${players[playersLength.current]} - `));      
      console.log(players);
    }
    playersLength.current = playersLength.current - 1;
    console.log(playersLength.current);
    */
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
