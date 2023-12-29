import { useState } from 'react';
import data from './assets/data';
import './Card.css';

const initialCard = {
  'person': {"type": "Pessoa, profissão ou animal", action: "Cachorro", points: 1},
  'object': {"type": "Objeto", "action": "Xadrez", points: 1},
  'action': {"type": "Ação", "action": "Sorrir", points: 1},
  'hard': {"type": "Difícil", "action": "Gostar", points: 1},
  'leasure': {"type": "Lazer", "action": "Dançar", points: 1},
  'easy': {"type": "Fácil", "action": "Sorrir", points: 1},
};

function Card () {

  const [card, setCard] = useState(initialCard);

  const newCard = () => {
    const newCardData = data.categories.map((category) => {
      const newAction = data[category][Math.floor(Math.random() * data[category].length)];
      return newAction;
    });
    const newCardDataObject = {};
    newCardData.forEach((item) => {
      const itemType = data.categoriesMapping[item.type];
      newCardDataObject[itemType] = item;
    });
    console.log(newCardDataObject);
    setCard(newCardDataObject);
  };

  return (
    <div className='cardWrapper'>
    <div className='card'>
      <h2>Card</h2>
      <p><strong>Pessoa, profissão ou animal: </strong>{ card?.person?.action } { ` ${card?.person?.points} pts.` }</p>
      <p><strong>Objeto: </strong> { card?.object?.action } { ` ${card?.object?.points} pts.` }</p>
      <p><strong>Ação: </strong> { card?.action?.action } { ` ${card?.action?.points} pts.` }</p>
      <p><strong>Difícil: </strong> { card?.hard?.action } { ` ${card?.hard?.points} pts.` }</p>
      <p><strong>Lazer: </strong> { card?.leasure?.action } { ` ${card?.leasure?.points} pts.` }</p>
      <p><strong>Fácil: </strong> { card?.easy?.action } { ` ${card?.easy?.points} pts.` }</p>
    </div>
    <button id='bution' onClick={ newCard }>Gerar</button>
    </div>
  )
}

export default Card;