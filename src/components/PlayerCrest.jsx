import React from 'react'

export default function PlayerCrest({player, hide}) {
  return (
    <div className={hide ? 'hide' : undefined}>{player}</div>
  )
}
