import React from 'react'

export default function PlayersTest({players}) {

  // const content = (players) => {
  //   return (
  //     players.map((player) => {
  //       <li> {player} </li>
  //     })
  //   )
  // }

  return (
    <ul>
      {players.map((player, index) => {
        return <li key={index}> {player} </li>
      })}
    </ul>
  )
}
