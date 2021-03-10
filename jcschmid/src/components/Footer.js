import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
       <h2>What altar of refuge can a man find when he commits treason against the majesty of reason?</h2>
       <h3>Baruch Spinoza</h3>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
          </div>
          <small class='website-rights'>Joseph C. Schmid © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to={{ pathname: 'http://www.facebook.com/joe.schmid.338658/' }}
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to={{ pathname:'https://www.youtube.com/c/MajestyofReason/' }}
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link wordpress'
              to={{ pathname:'https://majestyofreason.wordpress.com/' }}
              target='_blank'
              aria-label='Wordpress'
            >
              <i class='fab fa-wordpress' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;