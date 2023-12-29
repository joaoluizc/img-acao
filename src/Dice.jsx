import { useState } from 'react';
import data from './assets/data';

function Dice() {
  const [dice, setDice] = useState('');

  const rollDice = () => {
    const newCategory = data.categories[Math.floor(Math.random() * data.categories.length)];
    const category = data.categoriesMapping[newCategory];
    setDice(category);
  }

  return (
    <>
      <div>
        <h3>Dado</h3>
        <div id="action">{ dice }</div>
      </div>
      <button onClick={ rollDice }>Rolar Dado</button>
    </>
  )
}

export default Dice;
