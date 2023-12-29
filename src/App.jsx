import React, { useState } from 'react';
import Card from './Card';
import Dice from './Dice';
import './App.css';

function App() {
  const [points, setPoints] = useState({
    teamA: 0,
    teamB: 0,
  });
  const [turn, setTurn] = useState('teamA');

  const addPoints = (amount) => {
    if (turn === 'teamA') {
      setPoints({ ...points, teamA: points.teamA + amount });
    } else {
      setPoints({ ...points, teamB: points.teamB + amount });
    }
    switchTurn();
  };

  const switchTurn = () => {
    setTurn(turn === 'teamA' ? 'teamB' : 'teamA');
  };

  return (
    <div className='appWrapper'>
      <h1 className='titleWrapper'>Imagem & Ação</h1>
      <div>
        <h2 className='pontosWrapper'>Pontos</h2>
        
        <div className="points-team-a">Time A: { points.teamA }</div>
        <div className="points-team-b">Time B: { points.teamB }</div>
        
      </div>
      <div>
        <h2 className='vezWrapper'>Vez</h2>
        <div id="turn">{ turn === 'teamA' ? 'Time A' : 'Time B' }</div>
      </div>
      <Dice />
      <Card addPoints={ addPoints } switchTurn={ switchTurn }/>
    </div>
  )
}

export default App
