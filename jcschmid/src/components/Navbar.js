import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Header from './header.jpg'


function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
 return (
  <>
   <nav className="navbar">
    <div className="navbar-container">
   <Link to="/" className="navbar-logo">
     <img src={Header} alt="website logo" height={100} width={1200} />
    </Link>
     <div className='menu-icon' onClick={handleClick}>
      <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
     </div>  
     <ul className={click ? 'nav-menu active' : 'nav-menu'}>
         <li className='nav-item'>
             <Link to="/about" className='nav-links' onClick={closeMobileMenu}>
                 About
             </Link>
             <li className='nav-item'>
             <Link to="/videos" className='nav-links' onClick={closeMobileMenu}>
                 Videos
             </Link>
             </li>
             <li className='nav-item'>
             <Link to="/research" className='nav-links' onClick={closeMobileMenu}>
                 Research
             </Link>
             </li>          
            <li className='nav-item'>
             <Link to="/book" className='nav-links' onClick={closeMobileMenu}>
                 Book
             </Link>
                </li>
                <li className='nav-item'>
             <Link to="/blog" className='nav-links' onClick={closeMobileMenu}>
                 Blog
             </Link>
                </li>
             <li className='nav-item'>
             <Link to="/patreon" className='nav-links' onClick={closeMobileMenu}>
                 Patreon
             </Link>
                </li>
             <li className='nav-item'>
             <Link to="/contact" className='nav-links' onClick={closeMobileMenu}>
                 Contact
             </Link>
            </li>
            <li className='nav-item'>
             <Link to="/subscribe" className='nav-links-mobile' onClick={closeMobileMenu}>
                 Subscribe
             </Link>
            </li>
         </li>
     </ul>
    </div>
  </nav>
  </>
    )
}

export default NavBar
