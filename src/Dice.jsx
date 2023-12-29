import { useState } from 'react';
import data from './assets/data';
import './Dice.css';

function Dice() {
  const [dice, setDice] = useState('');

  const rollDice = () => {
    const newCategory = data.categories[Math.floor(Math.random() * data.categories.length)];
    const category = data.categoriesMapping[newCategory];
    setDice(category);
  }

  return (
    <div className='diceWrapper'>
      
      
        <h3 className='dado'>Dado</h3>
        <div className="action">{ dice }</div>
      
      <button onClick={ rollDice }>Rolar Dado</button>
    </div>
  )
}

export default Dice;
