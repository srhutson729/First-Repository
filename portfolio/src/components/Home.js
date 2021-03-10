import React from 'react';
import Footer from './Footer'


export default () => {
  return <>
  <img class="profile-pic" src="mug.jpg" alt="Card image" />
  <h2 class='text-center '>Feel free to take a look at my active projects!</h2>
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
 <Footer/>
  </>
}