import React from 'react';
import './Footer.css';

function Footer() {
    return (
  <footer class="bg-dark text-white blue pt-4" >
  <div class="container-fluid text-center text-md-left">
     <div class="row">
        <div class="col-md-6 mt-md-0 mt-3">
           <h5 class="text-uppercase">Contact Information</h5>
           <p>Email: srhutson729@gmail.com</p>
        </div>
        <hr class="clearfix w-100 d-md-none pb-3" />
        <div class="col-md-3 mb-md-0 mb-3">
        <ul class="list-unstyled list-inline text-center">
   <li class="list-inline-item">
     <a href={"https://www.facebook.com/srhutson729"} class="btn-floating btn-fb mx-1">
       <i class="fa fa-facebook-square fa-2x"> </i>
     </a>
   </li>
   <li class="list-inline-item">
     <a href={"https://github.com/srhutson729/First-Repository"} class="btn-floating btn-ghub mx-1">
       <i class="fa fa-github-square fa-2x"> </i>
     </a>
   </li>
   <li class="list-inline-item">
     <a class="btn-floating btn-google mx-1">
       <i class="fa fa-google fa-2x"> </i>
     </a>
   </li>
    <li class="list-inline-item">
     <a href={"https://www.linkedin.com/in/srhutson729"} class="btn-floating btn-linkedin mx-1">
       <i class="fa fa-linkedin-square fa-2x"> </i>
     </a>
   </li>
 </ul>
        </div>
     </div>
  </div>
  <div class="footer-copyright text-center py-3">© 2020 Copyright
     <a href="https://mdbootstrap.com/"> </a>
  </div>
</footer>
    );
} ;

export default Footer;