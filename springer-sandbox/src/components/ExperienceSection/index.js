import React from 'react';
import { Button } from '../ButtonElement';
import MyResume from '../../images/RichardHaar_25.pdf';
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
    CardRole,
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
                    href={MyResume}  
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
                        <CardDate>2022 - Present</CardDate>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style="height:20px; position:relative; left:95%; top:-30px;" class="link-arrow"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                        <CardTitle>Springer Studios</CardTitle>
                        <CardRole>Senior Frontend Developer</CardRole>
                        <CardText></CardText>
                        <TagWrapper>
                            <Tag>React</Tag>
                            <Tag>Redux</Tag>
                            <Tag>node.js</Tag>
                            <Tag>Postgres</Tag>
                            <Tag>Tailwind</Tag>
                            <Tag>AWS</Tag>
                            <Tag>JavaScript</Tag>
                            <Tag>TypeScript</Tag>
                        </TagWrapper>
                    </CardInfo>
                </CardItem>
                <CardItem as="a" href="https://dtinetworks.com/" target="_blank" rel="noopener noreferrer">
                    <CardInfo>
                        <CardDate>2019 - 2022</CardDate>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style="height:20px; position:relative; left:95%; top:-30px;" class="link-arrow"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                        <CardTitle>HighClick Media</CardTitle>
                        <CardRole>Web Developer</CardRole>
                        <CardText></CardText>
                        <TagWrapper>
                            <Tag>JavaScript</Tag>
                            <Tag>SCSS</Tag>
                            <Tag>React</Tag>
                            <Tag>jQuery</Tag>
                            <Tag>WordPress</Tag>
                            <Tag>Webflow</Tag>
                            <Tag>PHP</Tag>
                            <Tag>MySQL</Tag>
                        </TagWrapper>
                    </CardInfo>
                </CardItem>
                <CardItem>
                    <CardInfo>
                    <CardDate>2018 - 2019</CardDate>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style="height:20px; position:relative; left:95%; top:-30px;" class="link-arrow"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                        <CardTitle>Freelance</CardTitle>
                        <CardRole>Frontend Developer</CardRole>
                        <CardText></CardText>
                        <TagWrapper>
                            <Tag>WordPress</Tag>
                            <Tag>PHP</Tag>
                            <Tag>HTML</Tag>
                            <Tag>CSS</Tag>
                            <Tag>JavaScript</Tag>
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
