import React from 'react';
import Icon1 from '../../images/Studsvik-2.png';
import Icon2 from '../../images/project-dashboard.png';
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


const buttonLink="https://www.richardhaar.com/portfolio"

const Services = () => {
  return (
    <>
    <ServicesContainer id='our-work'>
      <ServicesH1>Featured Projects</ServicesH1>
      <ServicesWrapper>
        <ServicesCard as="a" href="https://www.studsvik.com" target="_blank" rel="noopener noreferrer">
          <ServicesArrow></ServicesArrow>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Custom PHP Theme</ServicesH2>
          <ServicesP>
            A custom WordPress multisite developed for Studsvik, a nuclear reactor software company based in Sweden. Utilizing Tailwind and JQuery as well as REST APIs accessing the Swedish stock market index.  
          </ServicesP>
        </ServicesCard>
        <ServicesCard as="a" href="https://main.dp9uus28slxd2.amplifyapp.com/" target="_blank" rel="noopener noreferrer"tr>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Project Management Application</ServicesH2>
          <ServicesP>
          A project management app built to streamline our agencies workflows. I engineered the application using React, TypeScript and PostgreSQL. The application is deployed on AWS Amplify and EC2 instances. It utlizes AWS Cognito for user authentication and management.  
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
      <a href={buttonLink}
      >
      <BtnWrap>
        <Button as="span" id="project-btn">View All Projects</Button>
      </BtnWrap>
      </a>
    </ServicesContainer>
    </>
  );
};

export default Services;
