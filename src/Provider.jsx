import Context from './Context';
import { useState } from 'react';

function Provider(props) {
  const [points, setPoints] = useState({
    teamA: 0,
    teamB: 0,
  });
  const [turn, setTurn] = useState('teamA');

  const switchTurn = () => {
    setTurn(turn === 'teamA' ? 'teamB' : 'teamA');
  };

  const addPoints = (amount) => {
    if (turn === 'teamA') {
      setPoints({ ...points, teamA: points.teamA + amount });
    } else {
      setPoints({ ...points, teamB: points.teamB + amount });
    }
    switchTurn();
  };

  const data = {
    points,
    addPoints,
    turn,
    switchTurn,
  };

  return (
    <Context.Provider value={data}>
      {props.children}
    </Context.Provider>
  );
}

export default Provider;