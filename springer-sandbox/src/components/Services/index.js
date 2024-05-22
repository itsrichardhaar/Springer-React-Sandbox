import React from 'react';
import Icon1 from '../../images/Studsvik-2.png';
import Icon2 from '../../images/CFCC-2.png';
import Icon3 from '../../images/svg-1.svg';
import { Button } from '../ButtonElement';
import { Link } from 'react-router-dom';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  ServicesArrow,
  BtnWrap
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='our-work'>
      <ServicesH1>Featured Work</ServicesH1>
      <ServicesWrapper>
        <ServicesCard as="a" href="https://www.studsvik.com" target="_blank" rel="noopener noreferrer">
          <ServicesArrow></ServicesArrow>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Custom PHP Theme Site</ServicesH2>
          <ServicesP>
            A custom PHP multisite developed for Studsvik, a nuclear reactor software company based in Sweden. Utilizing Tailwind and JQuery as well as REST APIs accessing the Swedish stock market index.  
          </ServicesP>
        </ServicesCard>
        <ServicesCard as="a" href="https://cfcc.edu/" target="_blank" rel="noopener noreferrer"tr>
          <ServicesIcon src={Icon2} />
          <ServicesH2>API Integration</ServicesH2>
          <ServicesP>
          Site developed for Cape Fear Community College. Built in PHP and integrated with REST APIs to sync and display course sequences from their software catalog. The site also utilizes Bootstrap and JQuery. 
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
      <BtnWrap>
        <Link to="/portfolio" onClick={() => console.log("Button clicked!")}>
          <Button id="project-btn">Learn More</Button>
        </Link>
      </BtnWrap>
    </ServicesContainer>
  );
};

export default Services;