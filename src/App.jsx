import Card from './Card';
import Dice from './Dice';
import ScoreBoard from './ScoreBoard';
import './App.css';
import TurnBoard from './TurnBoard';

function App() {
  return (
    <div className='appWrapper'>
      <h1 className='titleWrapper'>Imagem & Ação</h1>
      <div className='sideWrapper'>
      <ScoreBoard />
      <TurnBoard />
      </div>
      <Dice />
      <Card/>
    </div>
  )
}

export default App
