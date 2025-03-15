import React from 'react';
import { Player } from '../types/types';

const initialPlayers: Player[] = [
  { id: 1, name: "j1", avatar: "https://imx.crosstheages.com/image/avatar-frame/avatar-frame-event-s2-2-1.png", isAlive: true, points: 0, kills: 0 },
  { id: 2, name: "j2", avatar: "https://imx.crosstheages.com/image/avatar-frame/avatar-frame-event-s2-2-1.png", isAlive: true, points: 0, kills: 0 },
  { id: 3, name: "j3", avatar: "https://imx.crosstheages.com/image/avatar-frame/avatar-frame-event-s2-2-1.png", isAlive: true, points: 0, kills: 0 },
  { id: 4, name: "j4", avatar: "https://imx.crosstheages.com/image/avatar-frame/avatar-frame-event-s2-2-1.png", isAlive: true, points: 0, kills: 0 },
  { id: 5, name: "j5", avatar: "https://imx.crosstheages.com/image/avatar-frame/avatar-frame-event-s2-2-1.png", isAlive: true, points: 0, kills: 0 },
  { id: 6, name: "j6", avatar: "https://imx.crosstheages.com/image/avatar-frame/avatar-frame-event-s2-2-1.png", isAlive: true, points: 0, kills: 0 },
  { id: 7, name: "j7", avatar: "https://imx.crosstheages.com/image/avatar-frame/avatar-frame-event-s2-2-1.png", isAlive: true, points: 0, kills: 0 },
  { id: 8, name: "j8", avatar: "https://imx.crosstheages.com/image/avatar-frame/avatar-frame-event-s2-2-1.png", isAlive: true, points: 0, kills: 0 },
  { id: 9, name: "j9", avatar: "https://imx.crosstheages.com/image/avatar-frame/avatar-frame-event-s2-2-1.png", isAlive: true, points: 0, kills: 0 },
  { id: 10, name: "j10", avatar: "https://imx.crosstheages.com/image/avatar-frame/avatar-frame-event-s2-2-1.png", isAlive: true, points: 0, kills: 0 },
]

export default function Root() {
  return (
    <div>
      <h1>Battle Royal</h1>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nom</th>
            <th>Statut</th>
            <th>Nombre de points</th>
            <th>Kills</th>
            <th>Tué par</th>
          </tr>
        </thead>
        <tbody>
          {initialPlayers.map((player) => (
            <tr key={player.id}>
              <td>{player.avatar}</td>
              <td>{player.name}</td>
              <td>{player.isAlive}</td>
              <td>{player.points}</td>
              <td>{player.kills}</td>
              <td>{player.killedBy}</td>
            </tr>))}
        </tbody>
      </table>
    </div>
  )
}