import React from 'react';
//import image from '../assets/Brahe.png'

export default function PlayerShield({ player, hide }) {
  // const imagePath = `../assets/${player}.png`;
  
  return (
    <div className={hide ? 'hide' : undefined}>
      {/* <img src={require(`../assets/${player}.png`)} alt='' height='100' /> */}
      <img src={`${player}.png`} alt='' height='60' />      
      {player}
    </div>
  );
}
