import React from 'react';
import { Button } from '../ButtonElement';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  SubtitleTwo,
  SubtitleThree,
  ImgWrap,
  Img
} from './ExperienceElements';

import {
    CardContainer,
    CardWrapper,
    CardItem,
    CardImg,
    CardDate,
    CardInfo,
    CardTitle,
    CardText,
    TagWrapper,
    Tag
  } from './CardElements';

const ExperienceSection = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  descriptionTwo,
  descriptionThree,
  buttonLabel,
  img,
  alt,
  id,
  primary,
  darkText,
  dark,
  dark2
}) => {

  console.log(primary);
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading lightText={lightText}>{headline}</Heading>
                <TopLine>{topLine}</TopLine>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    as='a'
                    href="//docs.google.com/document/d/12KzNeQHEAoc3C2ueVT2HCNbATMh160SsUONvo9aPy0I/edit?usp=sharing" 
                    target='_blank'
                    rel='noopener noreferrer'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
            <CardContainer>
                <CardWrapper>
                 <CardItem as="a" href="https://www.springerstudios.com" target="_blank" rel="noopener noreferrer">
                    <CardInfo>
                        <CardDate>Feb 2022 - Present</CardDate>
                        <CardTitle>Springer Studios</CardTitle>
                        <CardText>Senior Frontend Developer</CardText>
                        <TagWrapper>
                            <Tag>React</Tag>
                            <Tag>Redux</Tag>
                            <Tag>Styled Components</Tag>
                            <Tag>Famer Motion</Tag>
                            <Tag>GSAP</Tag>
                            <Tag>AWS</Tag>
                            <Tag>PHP</Tag>
                            <Tag>Tailwind</Tag>
                        </TagWrapper>
                    </CardInfo>
                </CardItem>
                <CardItem as="a" href="https://dtinetworks.com/" target="_blank" rel="noopener noreferrer">
                    <CardInfo>
                        <CardDate>May 2019 - Feb 2022</CardDate>
                        <CardTitle>HighClick Media</CardTitle>
                        <CardText>Web Developer / SEO Specialist</CardText>
                        <TagWrapper>
                            <Tag>React</Tag>
                            <Tag>SCSS</Tag>
                            <Tag>Javascript</Tag>
                            <Tag>jQuery</Tag>
                            <Tag>WordPress</Tag>
                            <Tag>PHP</Tag>
                            <Tag>MySQL</Tag>
                        </TagWrapper>
                    </CardInfo>
                </CardItem>
                <CardItem>
                    <CardInfo>
                    <CardDate>2018 - 2019</CardDate>
                        <CardTitle>Freelance</CardTitle>
                        <CardText>WordPress Developer</CardText>
                        <TagWrapper>
                            <Tag>WordPress</Tag>
                            <Tag>PHP</Tag>
                            <Tag>HTML</Tag>
                            <Tag>CSS</Tag>
                            <Tag>Javascript</Tag>
                        </TagWrapper>
                    </CardInfo>
                </CardItem>
                </CardWrapper>
             </CardContainer>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default ExperienceSection;