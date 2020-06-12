import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const App =() => {
    return <div class='container-fluid'>
        <h1 class='text-center'>Scott Hutson</h1>
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
        <Button variant="danger">DANGER</Button>

    </div>;

};




ReactDOM.render(
    <App />,
    document.querySelector('#root'));