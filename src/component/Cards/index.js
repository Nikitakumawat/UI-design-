import React from 'react';
import './cards.css';

function Cards({img, heading, description}) {
  return (
    <div className='card'>
        <div className='image'>
           <img src={img} alt="food" class="responsive"/>
        </div>
        <div className='card__heading'>
          <h4>{heading}</h4>
        </div>
        <div className="description">
           {description}
        </div>
    </div>
  )
}

export default Cards;
