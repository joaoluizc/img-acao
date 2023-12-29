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
    console.log(newCardData);
  };

  return (
    <>
    <div className='card'>
      <h2>Card</h2>
      <p>Pessoa, profissão ou animal: { card.person }</p>
      <p>Objeto: { card.object }</p>
      <p>Ação: { card.action }</p>
      <p>Difícil: { card.hard }</p>
      <p>Lazer: { card.leasure }</p>
      <p>Fácil: { card.easy }</p>
    </div>
    <button onClick={ newCard }>Gerar</button>
    </>
  )
}

export default Card;