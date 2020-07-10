import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './site.css'
import './App.css'


const App =() => {
    return <div class='container-fluid'>
        <h1 class='text-center'>Scott Hutson</h1>
        <h2 class='text-center '>Welcome!</h2>
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
      <h4 class="card-title">REST Demo</h4>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
    <img class="card-img" src="https://image.flaticon.com/icons/png/512/478/478509.png" alt="Card image" />
      <h4 class="card-title">Map Demo</h4>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
  </div>
   <div class="card">
    <div class="card-body">
    <img class="card-img" src="https://image.flaticon.com/icons/png/512/478/478509.png" alt="Card image" />
      <h4 class="card-title">Data Demo</h4>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div>
</div>

</div>

<footer class="bg-dark text-white blue pt-4">

  <div class="container-fluid text-center text-md-left">

    <div class="row">

      <div class="col-md-6 mt-md-0 mt-3">

     
        <h5 class="text-uppercase">Footer Content</h5>
        <p>Here you can use rows and columns to organize your footer content.</p>

      </div>
 

      <hr class="clearfix w-100 d-md-none pb-3">

  
      <div class="col-md-3 mb-md-0 mb-3">

  
        <h5 class="text-uppercase">Links</h5>

        <ul class="list-unstyled">
          <li>
            <a href="/">Link 1</a>
          </li>
          <li>
            <a href="/">Link 2</a>
          </li>
          <li>
            <a href="/">Link 3</a>
          </li>
          <li>
            <a href="/">Link 4</a>
          </li>
        </ul>

      </div>
       <div class="col-md-3 mb-md-0 mb-3">


        <h5 class="text-uppercase">Links</h5>

        <ul class="list-unstyled">
          <li>
            <a href="/">Link 1</a>
          </li>
          <li>
            <a href="/">Link 2</a>
          </li>
          <li>
            <a href="/">Link 3</a>
          </li>
          <li>
            <a href="/">Link 4</a>
          </li>
        </ul>

      </div>
   </div>
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
  </div>
 </footer>

</div> 
};

ReactDOM.render(
    <App />,
    document.querySelector('#root'));