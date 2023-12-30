import { useContext } from 'react';
import Context from './Context';

function TurnBoard () {
  const { turn } = useContext(Context);
  return (
  <div>
    <h2 className='vezWrapper'>Vez</h2>
    <div id="turn">{ turn === 'teamA' ? 'Time A' : 'Time B' }</div>
  </div>
  )
}

export default TurnBoard;