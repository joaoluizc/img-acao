import { useContext } from 'react';
import Card from './Card';
import Dice from './Dice';
import Context from './Context';

function App() {
  const { points, turn } = useContext(Context);

  return (
    <>
      <h1>Imagem & Ação</h1>
      <div>
        <h2>Pontos</h2>
        <div id="points-team-a">Time A: { points.teamA }</div>
        <div id="points-team-b">Time B: { points.teamB }</div>
      </div>
      <div>
        <h2>Vez</h2>
        <div id="turn">{ turn === 'teamA' ? 'Time A' : 'Time B' }</div>
      </div>
      <Dice />
      <Card/>
    </>
  )
}

export default App
