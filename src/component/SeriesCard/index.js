import React from 'react';
import './seriesCard.css';

function SeriesCard({img, heading, description}) {
  return (
    <div className='series__detail'>
      <div className='series__image'>
         <img src={img} alt="series_images" />
      </div>
      <div className="series__info">
        <div className='series__heading'>{heading}</div>
        <div className="series__description">
          {description}
        </div>
      </div>
    </div>
  )
}

export default SeriesCard;
