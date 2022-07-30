import React from 'react';
import Cards from '../Cards/index';
import spaghetti from '../../images/spaghetti.jpg';
import salad from '../../images/salad.jpg';
import drinks from '../../images/drinks.jpg';
import frenchToast from '../../images/french toast.jpg';
import pasta from '../../images/pasta.jpg';
import './cardContainer.css';

function CardContainer() {
  return (
    <div className='card__container'>
      <div className="card__container__heading">
        <hr/>
        <h4>Related Atricles</h4>
      </div>
      <div className='card__layout'>
        <Cards img={pasta} heading={'Lorem ipsum'} description={'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'}/>
        <Cards img={pasta} heading={'Lorem ipsum'} description={'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'}/>
        <Cards img={salad} heading={'Lorem ipsum'} description={'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'}/>
        <Cards img={salad} heading={'Lorem ipsum'} description={'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'}/>
        <Cards img={salad} heading={'Lorem ipsum'} description={'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'}/>
      </div>
    </div>
  )
}

export default CardContainer;
