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
              src='images/Videos.jpg'
              text='Check out my channel The Majesty of Reason as well as Interviews and Debates'
              label='Videos'
              path='/videos'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/blog.jpg'
              text='Check out my blog here'
              label='Blog'
              path='/blog'
            />
            <CardItem
              src='images/bookcover2.jpg'
              text='The Majesty of Reason: A Short Guide to Critical Thinking in Philosophy'
              label='Books'
              path='/book'
            />
            <CardItem
              src='images/Capture.jpg'
              text='Join my Patreon and help me create new content!'
              label='Patreon'
              path='/patreon'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;