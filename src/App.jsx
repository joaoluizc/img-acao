import { useState } from 'react';
import data from './assets/data';
import Card from './Card';

function App() {
  const [action, setAction] = useState('');
  const [dice, setDice] = useState('');

  const rollDice = () => {
    const newCategory = data.categories[Math.floor(Math.random() * data.categories.length)];
    const category = data.categoriesMapping[newCategory];
    setDice(category);
  }

  return (
    <>
      <h1>Imagem & Ação</h1>
      <div>
        <h3>Dado</h3>
        <div id="action">{ dice }</div>
      </div>
      <button onClick={ rollDice }>Rolar Dado</button>
      <Card />
    </>
  )
}

export default App
