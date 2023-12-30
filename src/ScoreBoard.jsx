import { useContext } from 'react';
import Context from './Context';

function ScoreBoard () {
  const { points } = useContext(Context);
  return (
    <div>
      <h2 className='pontosWrapper'>Pontos</h2>
      <div className="points-team-a">Time A: { points.teamA }</div>
      <div className="points-team-b">Time B: { points.teamB }</div>
    </div>
  )
}

export default ScoreBoard;