import { useState } from 'react';
import data from './assets/data';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const initialCard = {
  'person': {"type": "Pessoa, profissão ou animal", action: "Cachorro", points: 1},
  'object': {"type": "Objeto", "action": "Xadrez", points: 1},
  'action': {"type": "Ação", "action": "Sorrir", points: 1},
  'hard': {"type": "Difícil", "action": "Gostar", points: 1},
  'leasure': {"type": "Lazer", "action": "Dançar", points: 1},
  'easy': {"type": "Fácil", "action": "Sorrir", points: 1},
};

function Card ({ addPoints, switchTurn }) {

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
      <div>
      Pessoa, profissão ou animal: { card?.person?.action } { ` ${card?.person?.points} pts.` }
      <button
        className="thumbs-up"
        onClick={ () => addPoints(card?.person?.points) }
      >
        <FontAwesomeIcon icon={faThumbsUp} />
      </button>
      <button className="thumbs-down"><FontAwesomeIcon icon={faThumbsDown} /></button>
    </div>
    <div>
      Objeto: { card?.object?.action } { ` ${card?.object?.points} pts.` }
      <button
        className="thumbs-up"
        onClick={ () => addPoints(card?.object?.points) }
      >
        <FontAwesomeIcon icon={faThumbsUp} />
      </button>
      <button className="thumbs-down"><FontAwesomeIcon icon={faThumbsDown} /></button>
    </div>
    <div>
      Ação: { card?.action?.action } { ` ${card?.action?.points} pts.` }
      <button
        className="thumbs-up"
        onClick={ () => addPoints(card?.action?.points) }
      >
        <FontAwesomeIcon icon={faThumbsUp} />
      </button>
      <button className="thumbs-down"><FontAwesomeIcon icon={faThumbsDown} /></button>
    </div>
    <div>
      Difícil: { card?.hard?.action } { ` ${card?.hard?.points} pts.` }
      <button
        className="thumbs-up"
        onClick={ () => addPoints(card?.hard?.points) }
      >
        <FontAwesomeIcon icon={faThumbsUp} />
      </button>
      <button className="thumbs-down"><FontAwesomeIcon icon={faThumbsDown} /></button>
    </div>
    <div>
      Lazer: { card?.leasure?.action } { ` ${card?.leasure?.points} pts.` }
      <button
        className="thumbs-up"
        onClick={ () => addPoints(card?.leasure?.points) }
      >
        <FontAwesomeIcon icon={faThumbsUp} />
      </button>
      <button className="thumbs-down"><FontAwesomeIcon icon={faThumbsDown} /></button>
    </div>
    <div>
      Fácil: { card?.easy?.action } { ` ${card?.easy?.points} pts.` }
      <button
        className="thumbs-up"
        onClick={ () => addPoints(card?.easy?.points) }
      >
        <FontAwesomeIcon icon={faThumbsUp} />
      </button>
      <button className="thumbs-down"><FontAwesomeIcon icon={faThumbsDown} /></button>
    </div>
    </div>
    <button id='bution' onClick={ newCard }>Gerar</button>
    </div>
  )
}

export default Card;