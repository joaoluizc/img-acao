import { useState } from 'react';
import data from './assets/data';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faP , faO, faA , faD, faCircleCheck, faCircleXmark, faL, faF, } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const initialCard = {
  'person': {"type": "Pessoa", "action": "Cachorro", points: 1},
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
   
  Card.propTypes = {
    addPoints: PropTypes.func.isRequired,
    switchTurn: PropTypes.func.isRequired,
  };

  return (
    <div className='cardWrapper'>
    <div className='card'>
      <h2 className='cardi'>Card</h2>
      <div id='teste'>
      <span className='spani'><FontAwesomeIcon icon={faP} /></span> { card?.person?.action } { ` ${card?.person?.points} pts.` }
      </div>
  <div className='botoes'>
      <button
        className="thumbs-up"
        onClick={ () => addPoints(card?.person?.points) }
      >
        <FontAwesomeIcon icon={faCircleCheck} />
      </button>
      <button className="thumbs-down" onClick={switchTurn}><FontAwesomeIcon icon={faCircleXmark} /></button>
    </div>
    <div>
    <span className='spani'><FontAwesomeIcon icon={faO} /></span> { card?.object?.action } { ` ${card?.object?.points} pts.` }
    <div className='botoes'>
      <button
        className="thumbs-up"
        onClick={ () => addPoints(card?.object?.points) }
      >
        <FontAwesomeIcon icon={faCircleCheck} />
      </button>
      <button className="thumbs-down" onClick={switchTurn}><FontAwesomeIcon icon={faCircleXmark} /></button>
      </div>
    </div>
    <div>
    <span className='spani'><FontAwesomeIcon icon={faA} /></span> { card?.action?.action } { ` ${card?.action?.points} pts.` }
    <div className='botoes'>
      <button
        className="thumbs-up"
        onClick={ () => addPoints(card?.action?.points) }
      >
        <FontAwesomeIcon icon={faCircleCheck} />
      </button>
      <button className="thumbs-down" onClick={switchTurn}><FontAwesomeIcon icon={faCircleXmark} /></button>
      </div>
    </div>
    <div>
    <span className='spani'><FontAwesomeIcon icon={faD} /></span> { card?.hard?.action } { ` ${card?.hard?.points} pts.` }
      <div className='botoes'>
      <button
        className="thumbs-up"
        onClick={ () => addPoints(card?.hard?.points) }
      >
        <FontAwesomeIcon icon={faCircleCheck} />
      </button>
      <button className="thumbs-down" onClick={switchTurn}><FontAwesomeIcon icon={faCircleXmark} /></button>
      </div>
    </div>
    <div>
    <span className='spani'><FontAwesomeIcon icon={faL} /></span> 
    <span className='ruan'>{ card?.leasure?.action } </span> <span>{ ` ${card?.leasure?.points} pts.` }</span>
    <div className='botoes'>
      <button
        className="thumbs-up"
        onClick={ () => addPoints(card?.leasure?.points) }
      >
        <FontAwesomeIcon icon={faCircleCheck} />
      </button>
      <button className="thumbs-down" onClick={switchTurn}><FontAwesomeIcon icon={faCircleXmark} /></button>
      </div>
    </div>
    <div>
    <span className='spani'><FontAwesomeIcon icon={faF} /></span>
    <span className='ruan'> { card?.easy?.action }</span>  { ` ${card?.easy?.points} pts.` }
    <div className='botoes'>
      <button
        className="thumbs-up"
        onClick={ () => addPoints(card?.easy?.points) }
      >
        <FontAwesomeIcon icon={faCircleCheck} />
      </button>
      
    <button className="thumbs-down" onClick={switchTurn}><FontAwesomeIcon icon={faCircleXmark} /></button>
    
    </div>
    
    </div>
    
    </div>
    <button id='bution' onClick={ newCard }>Gerar</button>
    </div>
  )
}

export default Card;