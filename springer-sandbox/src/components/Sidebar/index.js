import React from 'react';
import { 
    SidebarContainer, 
    Icon,
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
    SideBtnWrap, 
    SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink 
                to="about" 
                onClick={toggle} 
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}>
                    About
                    </SidebarLink>
                <SidebarLink 
                to="services" 
                onClick={toggle} 
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >Experience
                    </SidebarLink>
                <SidebarLink 
                to="our-work" 
                onClick={toggle} 
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >Projects
                    </SidebarLink>
                <SidebarLink 
                to="contact" 
                onClick={toggle} 
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >Contact
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute as="a" href="mailto:haar.richard@gmail.com">Email Me</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>

  );
};

export default Sidebar;
