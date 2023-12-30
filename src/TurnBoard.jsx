import { useContext } from 'react';
import Context from './Context';

function TurnBoard () {
  const { turn } = useContext(Context);
  return (
  <div>
    <h2 className='vezWrapper'><strong>Vez</strong></h2>
    <div id="turn"> <strong>{ turn === 'teamA' ? 'Time A' : 'Time B' }</strong></div>
  </div>
  )
}

export default TurnBoard;