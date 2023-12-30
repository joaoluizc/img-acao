import { useContext } from 'react';
import Card from './Card';
import Dice from './Dice';
import Context from './Context';
import ScoreBoard from './ScoreBoard';
import './App.css';
import TurnBoard from './TurnBoard';

function App() {
  return (
    <div className='appWrapper'>
      <h1 className='titleWrapper'>Imagem & Ação</h1>
      <ScoreBoard />
      <TurnBoard />
      <Dice />
      <Card/>
    </div>
  )
}

export default App
