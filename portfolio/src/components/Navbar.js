import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function NavBar() {
    const [click, setClick] = useState(false);
 
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

   
 return (
  <>
   <nav className="navbar">
    <div className="navbar-container">
   <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
       Scott Hutson
        </Link>
     <div className='menu-icon' onClick={handleClick}>
      <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
     </div>  
     <ul className={click ? 'nav-menu active' : 'nav-menu'}>
     <li className='nav-item'>
            </li>
         <li className='nav-item'>
             <Link to="/about" className='nav-links' onClick={closeMobileMenu}>
                 About
             </Link>
            </li>
            <li className='nav-item'>
             <Link to="/projects" className='nav-links' onClick={closeMobileMenu}>
                 Projects
             </Link>
             </li>  
             <li className='nav-item'>
             <Link to="/resume" className='nav-links' onClick={closeMobileMenu}>
                 Resume
             </Link>
             </li>
            <li className='nav-item'>
         </li>
     </ul>
    </div>
  </nav>
  </>
    );
}

export default NavBar;