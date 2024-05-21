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
        <ServicesCard as="a" href="" target="_blank" rel="noopener noreferrer">
          <ServicesArrow></ServicesArrow>
          <ServicesH2>WordPress</ServicesH2>
          <ServicesP>
            A modern community college website that utilizes a custom PHP theme and integrates several API's.
          </ServicesP>
        </ServicesCard>
        <ServicesCard as="a" href="" target="_blank" rel="noopener noreferrer">
          <ServicesH2>Web Application / React</ServicesH2>
          <ServicesP>
            Discover what makes us the perfect full-service solution for your next step in marketing.
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