import { useContext } from 'react';
import Context from './Context';

function TurnBoard () {
  const { turn } = useContext(Context);
  return (
  <div className='vezWrapper'>
    <h2><strong>Vez</strong></h2>
    <div className={turn} id="turn"> <strong>{ turn === 'teamA' ? 'Time A' : 'Time B' }</strong></div>
  </div>
  )
}

export default TurnBoard;