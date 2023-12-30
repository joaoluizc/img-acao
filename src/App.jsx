import { useContext } from 'react';
import Card from './Card';
import Dice from './Dice';
import Context from './Context';
import './App.css';

function App() {
  const { points, turn } = useContext(Context);

  return (
    <div className='appWrapper'>
      <h1 className='titleWrapper'>Imagem & Ação</h1>
      <div>
        <h2 className='pontosWrapper'>Pontos</h2>
        
        <div className="points-team-a"><strong>Time A: { points.teamA }</strong></div>
        <div className="points-team-b"><strong>Time B: { points.teamB }</strong></div>
        
      </div>
      <div>
        <h2 className='vezWrapper'>Vez</h2>
        <div className="turn"><strong>{ turn === 'teamA' ? 'Time A' : 'Time B' }</strong></div>
      </div>
      <Dice />
      <Card/>
    
    </div>
  )
}

export default App
