import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './site.css'


const App =() => {
    return <div class='container-fluid'>
        <h1 class='text-center'>Scott Hutson</h1>
        <h2 class='text-center'>Welcome!</h2>
        <ul class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a class="nav-link" href="#!">About Me</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#!">Projects</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#!">Resume</a>
  </li>
</ul>
<img class="profile-pic" src="mug.jpg" alt="Card image" />
<div class="card-deck">
  <div class="card">
    <div class="card-body">
    <img class="card-img" src="https://image.flaticon.com/icons/png/512/478/478509.png" alt="Card image" />
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
    <img class="card-img" src="https://image.flaticon.com/icons/png/512/478/478509.png" alt="Card image" />
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
  </div>
   <div class="card">
    <div class="card-body">
    <img class="card-img" src="https://image.flaticon.com/icons/png/512/478/478509.png" alt="Card image" />
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div>
</div>

 </div> };

ReactDOM.render(
    <App />,
    document.querySelector('#root'));