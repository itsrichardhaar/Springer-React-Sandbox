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
    <>
        <Nav scrollNav ={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>
                    <img src={require('../../images/Springer_Studios_Logo.png')} alt='NavImage' width={250} />
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
                        >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services"
                        smooth={true}
                        duration={800}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="our-work"
                        smooth={true}
                        duration={800}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Our Work</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="our-team"
                        smooth={true}
                        duration={800}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Our Team</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact"
                    
                        >Contact</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>    
    </>
  );
};

export default Navbar;