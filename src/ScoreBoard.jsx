import { useContext } from 'react';
import Context from './Context';
import './ScoreBoard.css';

function ScoreBoard () {
  const { points, resetPoints } = useContext(Context);
  return (
    <div>
      <h2 className='pontosWrapper'>Pontos</h2>
      <div className="points-team-a"><strong>Time A: { points.teamA }</strong></div>
      <div className="points-team-b"><strong>Time B: { points.teamB }</strong></div>
      <div className="points-team-a">Time A: { points.teamA }</div>
      <div className="points-team-b">Time B: { points.teamB }</div>
      <button className="reset-points" onClick={resetPoints}>Reset Points</button>
    </div>
  )
}

export default ScoreBoard;