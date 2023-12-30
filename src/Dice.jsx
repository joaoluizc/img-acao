import { useState } from 'react';
import data from './assets/data';
import './Dice.css';
import Context from './Context';

function Dice() {
  const [dice, setDice] = useState('');
  const [modifier, setModifier] = useState('');

  const rollDice = () => {
    setModifier('');
    const newCategory = data.categories[Math.floor(Math.random() * data.categories.length)];
    const category = data.categoriesMapping[newCategory];
    const decideHasModifier = Math.random() < 0.1 ? true : false;
    if (decideHasModifier) {
      const modifier = data.modifiers[Math.floor(Math.random() * data.modifiers.length)];
      setModifier(modifier);
    }
    setDice(category);
  }

  return (
    <div className='diceWrapper'>
      
      
        <h3 className='dado'>Dado</h3>
        <div className="action"><strong>{ dice }</strong></div>
        { modifier && <div className="modifier"><strong>BÔNUS: </strong>{ modifier }</div> }
      <button onClick={ rollDice }><strong>Rolar Dado</strong></button>
    </div>
  )
}

export default Dice;
