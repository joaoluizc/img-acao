import { useEffect, useState, useContext } from 'react';
import data from './assets/data';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Context from './Context';
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

function Card () {
  const { addPoints, switchTurn } = useContext(Context);
  const [card, setCard] = useState(initialCard);

  useEffect(() => { newCard(); }, []);


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

  useEffect(() => { newCard() }, []);

  return (
    <div className='cardWrapper'>
    <div className='card'>
      <h2 className='cardi'>Card</h2>
      <div id='teste'>
      <span className='spani'><FontAwesomeIcon icon={faP} /></span> 
      <span className='ruan'> { card?.person?.action } </span> 
      <span className='points'> { ` ${card?.person?.points} pts.` }</span>
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
    <div className='itemWrapper'>
    <span className='spani'><FontAwesomeIcon icon={faO} /></span> 
    <span className='ruan'> { card?.object?.action } </span> 
    <span className='points'> { ` ${card?.object?.points} pts.` } </span>
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
    <span className='spani'><FontAwesomeIcon icon={faA} /></span> 
    <span className='ruan'> { card?.action?.action } </span>
    <span className='points'> { ` ${card?.action?.points} pts.` }</span>
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
    <span className='spani'><FontAwesomeIcon icon={faD} /></span> 
    <span className='ruan'> { card?.hard?.action }</span> 
    <span className='points'>{ ` ${card?.hard?.points} pts.` } </span>
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
    <span className='ruan'>{ card?.leasure?.action } </span> 
    <span className='points'>{ ` ${card?.leasure?.points} pts.` }</span>
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
    <span className='ruan'> { card?.easy?.action }</span>  
    <span className='points'>{ ` ${card?.easy?.points} pts.` } </span>

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