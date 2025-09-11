import React from 'react';
//import image from '../assets/Brahe.png'

export default function PlayerShield({ playerName, playerStatus}) {
  // const imagePath = `../assets/${player}.png`;
  // console.log('render shield');
 
  
  return (
    // <div className={hide ? 'hide' : undefined}>
    <div className={playerStatus}>
      {/* <img src={require(`../assets/${player}.png`)} alt='' height='100' /> */}
      <img src={`../src/assets/${playerName}.png`} alt='' height='60' />      
      {playerName} {playerStatus}      
    </div>
  );
}
// export default function PlayerShield({ player, hide, index }) {
//   // const imagePath = `../assets/${player}.png`;
//   // console.log('render shield');
  
//   let className = player.status
  
//   return (
//     // <div className={hide ? 'hide' : undefined}>
//     <div className={cl}>
//       {/* <img src={require(`../assets/${player}.png`)} alt='' height='100' /> */}
//       <img src={`${player.name}.png`} alt='' height='60' />      
//       {player.name} {player.status}
//     </div>
//   );
// }
