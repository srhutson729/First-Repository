import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
          <a href="/" className="avatar">
             <img alt="avatar" src={faker.image.avatar()} /> 
          </a>
          <div className="content">
              <a href="/" className="author">
                  Sam
                </a>
                <div className="metadata">
                    <span className="date">Today at 6:00PM</span>
                   </div>
                   <div className="text">Nice blog post!</div>
          </div>
          </div> 
          <div className="comment">
          <a href="/" className="avatar">
             <img alt="avatar"  src={faker.image.avatar()} /> 
          </a>
          <div className="content">
              <a href="/" className="author">
                  Brittany
                </a>
                <div className="metadata">
                    <span className="date">Today at 7:40PM</span>
                   </div>
                   <div className="text">I disagree and you're a horrible person!</div>
          </div>
          </div> 
          <div className="comment">
          <a href="/" className="avatar">
             <img alt="avatar"  src={faker.image.avatar()} /> 
          </a>
          <div className="content">
              <a href="/" className="author">
                  Karen
                </a>
                <div className="metadata">
                    <span className="date">Today at 8:00PM</span>
                   </div>
                   <div className="text">I want to speak to a manager!</div>
          </div>
          </div> 
               
        </div>
    );
};
ReactDOM.render(<App />, document.querySelector ('#root'))