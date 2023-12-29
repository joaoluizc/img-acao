import { useState } from 'react';
import data from './assets/data';

const initialCard = {
  person: {"type": "Pessoa, profissão ou animal", action: "Cachorro"},
  object: {"type": "Objeto", "action": "Xadrez"},
  action: {"type": "Ação", "action": "Sorrir"},
  hard: {"type": "Difícil", "action": "Gostar"},
  leasure: {"type": "Lazer", "action": "Dançar"},
  easy: {"type": "Fácil", "action": "Sorrir"},
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
      newCardDataObject[item.type] = item;
    });
    // setCard(newCardData);
    console.log(newCardDataObject);
  };

  return (
    <>
    <div className='card'>
      <h2>Card</h2>
      <p>Pessoa, profissão ou animal: { card.person.action }</p>
      <p>Objeto: { card.object.action }</p>
      <p>Ação: { card.action.action }</p>
      <p>Difícil: { card.hard.action }</p>
      <p>Lazer: { card.leasure.action }</p>
      <p>Fácil: { card.easy.action }</p>
    </div>
    <button onClick={ newCard }>Gerar</button>
    </>
  )
}

export default Card;