import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-1.svg';
import Icon3 from '../../images/svg-1.svg';
import { Button } from '../ButtonElement';
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
        <ServicesCard as="a" href="" target="_blank" rel="noopener noreferrer"tr>
          <ServicesIcon src={Icon3} />
          <ServicesH2>API Integration</ServicesH2>
          <ServicesP>
          We craft a comprehensive brand strategy that makes getting to know your brand a breeze for your audience. 
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
      <BtnWrap>
        <Button id="project-btn">Learn More</Button>
      </BtnWrap>
    </ServicesContainer>
  );
};

export default Services;