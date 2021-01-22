import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function NavBar() {
    const [click, setClick] = useState(false);
    const [button,setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
         setButton(false);
        } else {
           setButton(true);
        }
    };

    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton);

 return (
  <>
   <nav className="navbar">
    <div className="navbar-container">
   <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
       Joseph C. Schmid 
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
             <Link to="/research" className='nav-links' onClick={closeMobileMenu}>
                 Research
             </Link>
             </li>  
             <li className='nav-item'>
             <Link to="/videos" className='nav-links' onClick={closeMobileMenu}>
                 Videos
             </Link>
             </li>
            <li className='nav-item'>
             <Link to="/book" className='nav-links' onClick={closeMobileMenu}>
                 Books
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
         </li>
     </ul>
     {button && <Button buttsonStyle='btn--outline'>SUBSCRIBE</Button>}
    </div>
  </nav>
  </>
    );
}

export default NavBar;
