import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/pen.jpg'
              text='Research interests and current projects'
              label='Research'
              path='/research'
            />
            <CardItem
              src='images/joevideos.jpg'
              text='Check out my channel The Majesty of Reason as well as Interviews and Debates'
              label='Videos'
              path='/videos'
            />
             <CardItem
              src='images/blog2.jpg'
              text='Check out my blog here'
              label='Blog'
              path='/blog'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;