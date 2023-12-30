import { useContext } from 'react';
import Context from './Context';

function ScoreBoard () {
  const { points } = useContext(Context);
  return (
    <div className='pontosWrapper'>
      <h2>Pontos</h2>
      <div className="points-team-a"><strong>Time A: { points.teamA }</strong></div>
      <div className="points-team-b"><strong>Time B: { points.teamB }</strong></div>
    </div>
  )
}

export default ScoreBoard;