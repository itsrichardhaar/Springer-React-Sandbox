import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks } from './NavbarElements';

    import MouseTracker from '../MouseTracker/MouseTracker';
 
const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
          setScrollNav(true);
        } else {
          setScrollNav(false);
        }
      };

     useEffect(() => {
        window.addEventListener('scroll', changeNav);
      }, []);


      const toggleHome = () => {
        scroll.scrollToTop();
      }
  return (
    <MouseTracker>
        <Nav scrollNav ={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>
                    
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about"
                        smooth={true}
                        duration={800}
                        spy={true}
                        exact='true'
                        offset={-80}
                        ease="easeInOut"
                        >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services"
                        smooth={true}
                        duration={800}
                        spy={true}
                        exact='true'
                        offset={-80}
                        ease="easeInOut"
                        >Experience</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="our-work"
                        smooth={true}
                        duration={800}
                        spy={true}
                        exact='true'
                        offset={-80}
                        ease="easeInOut"
                        >Projects</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact"
                        smooth={true}
                        duration={800}
                        spy={true}
                        exact='true'
                        offset={-80}
                        ease="easeInOut"
                        >Contact</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>    
    </MouseTracker>
  );
};

export default Navbar;