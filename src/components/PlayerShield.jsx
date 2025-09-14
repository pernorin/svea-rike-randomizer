export default function PlayerShield({ playerName, playerStatus }) {
  const imagePath = `../src/assets/${playerName}.png`;
  // console.log('render shield');

  return (
    <div className={playerStatus}>
      <div className="shield-cover"></div>
      <img src={imagePath} alt='' height='60' />
      <p className='charm-regular'>{playerName} </p>
    </div>
  );
}

//////////////////////////////////////////////////////////////////
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
