import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaEnvelope
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              Back to Top
            </SocialLogo>
            <WebsiteRights>Loosely designed in Figma and coded in Visual Studio Code. Built with React and utlizing Styled Compontents, deployed with Vercel. All text is set in the Inter typeface.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/richard.haar.3' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/richard_haar/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.linkedin.com/in/richard-haar-a81916155/'
                target='_blank'
                aria-label='Linkedin'
                rel='noopener noreferrer'
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                target='_blank'
                aria-label='Github'
                href='https://github.com/itsrichardhaar'
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href='mailto:haar.richard@gmail.com' target='_blank' aria-label='Email'>
                <FaEnvelope />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;