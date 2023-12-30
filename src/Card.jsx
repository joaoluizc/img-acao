import { useEffect, useState, useContext } from 'react';
import data from './assets/data';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import Context from './Context';

const initialCard = {
  'person': {"type": "Pessoa, profissão ou animal", action: "Cachorro", points: 1},
  'object': {"type": "Objeto", "action": "Xadrez", points: 1},
  'action': {"type": "Ação", "action": "Sorrir", points: 1},
  'hard': {"type": "Difícil", "action": "Gostar", points: 1},
  'leasure': {"type": "Lazer", "action": "Dançar", points: 1},
  'easy': {"type": "Fácil", "action": "Sorrir", points: 1},
};

function Card () {
  const { addPoints, switchTurn } = useContext(Context);
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

  useEffect(() => { newCard() }, []);

  return (
    <div className='cardWrapper'>
    <div className='card'>
      <h2>Card</h2>
      <div>
      <span> Pessoa, profissão ou animal: </span> { card?.person?.action } { ` ${card?.person?.points} pts.` }
      <button
        className="thumbs-up"
        onClick={ () => addPoints(card?.person?.points) }
      >
        <FontAwesomeIcon icon={faThumbsUp} />
      </button>
      <button className="thumbs-down" onClick={switchTurn}><FontAwesomeIcon icon={faThumbsDown} /></button>
    </div>
    <div>
    <span> Objeto:</span> { card?.object?.action } { ` ${card?.object?.points} pts.` }
      <button
        className="thumbs-up"
        onClick={ () => addPoints(card?.object?.points) }
      >
        <FontAwesomeIcon icon={faThumbsUp} />
      </button>
      <button className="thumbs-down" onClick={switchTurn}><FontAwesomeIcon icon={faThumbsDown} /></button>
    </div>
    <div>
    <span> Ação: </span> { card?.action?.action } { ` ${card?.action?.points} pts.` }
      <button
        className="thumbs-up"
        onClick={ () => addPoints(card?.action?.points) }
      >
        <FontAwesomeIcon icon={faThumbsUp} />
      </button>
      <button className="thumbs-down" onClick={switchTurn}><FontAwesomeIcon icon={faThumbsDown} /></button>
    </div>
    <div>
      <span> Difícil:</span> { card?.hard?.action } { ` ${card?.hard?.points} pts.` }
      <button
        className="thumbs-up"
        onClick={ () => addPoints(card?.hard?.points) }
      >
        <FontAwesomeIcon icon={faThumbsUp} />
      </button>
      <button className="thumbs-down" onClick={switchTurn}><FontAwesomeIcon icon={faThumbsDown} /></button>
    </div>
    <div>
    <span> Lazer: </span>  { card?.leasure?.action } { ` ${card?.leasure?.points} pts.` }
      <button
        className="thumbs-up"
        onClick={ () => addPoints(card?.leasure?.points) }
      >
        <FontAwesomeIcon icon={faThumbsUp} />
      </button>
      <button className="thumbs-down" onClick={switchTurn}><FontAwesomeIcon icon={faThumbsDown} /></button>
    </div>
    <div>
    <span> Fácil: </span> { card?.easy?.action } { ` ${card?.easy?.points} pts.` }
      <button
        className="thumbs-up"
        onClick={ () => addPoints(card?.easy?.points) }
      >
        <FontAwesomeIcon icon={faThumbsUp} />
      </button>
      <button className="thumbs-down" onClick={switchTurn}><FontAwesomeIcon icon={faThumbsDown} /></button>
    </div>
    </div>
    <button id='bution' onClick={ newCard }>Gerar</button>
    </div>
  )
}

export default Card;