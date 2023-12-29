import { useState } from 'react';
import data from './assets/data';
import Card from './Card';

function App() {
  const [action, setAction] = useState('');

  const newCard = () => {
    const newCategory = data.categories[Math.floor(Math.random() * data.categories.length)];
    const newAction = data[newCategory][Math.floor(Math.random() * data[newCategory].length)];
    setAction(newAction);
  };

  const rollDice = () => {
    const newCategory = data.categories[Math.floor(Math.random() * data.categories.length)];
    alert(`Você tirou ${newCategory} no dado!`)
  }

  return (
    <>
      <h1>Imagem & Ação</h1>
      <div>
        <h3>Categoria</h3>
        <div id="category">{ action.type }</div>
      </div>
      <div>
        <h3>Ação</h3>
        <div id="action">{ action.action }</div>
      </div>
      <button onClick={ newCard }>Gerar</button>
      <button onClick={ rollDice }>Rolar Dado</button>
      <Card />
    </>
  )
}

export default App
