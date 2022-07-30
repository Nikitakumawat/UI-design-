import React from 'react';
import SeriesCard from '../SeriesCard';
import Flower from '../../images/flowers.jpg';
import Roses from '../../images/roses.jpg';
import './series.css';

function Series() {
  return (
    <div className='series'>
      <div className="series__main__heading">
        <hr/>
        <h4>More in this series</h4>
      </div>
      <div className="series__card">
         <SeriesCard img={Flower} heading={'Sed ut perspiciatis unde omnis'} description={'aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur'}/>
         <SeriesCard img={Roses} heading={'Sed ut perspiciatis unde omnis'} description={'aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur'}/>
      </div>
    </div>
  )
}

export default Series;
