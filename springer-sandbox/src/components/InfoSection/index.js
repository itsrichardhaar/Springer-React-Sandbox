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
} from './InfoElements';
import MouseTracker from '../MouseTracker/MouseTracker';

const InfoSection = ({
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
  dark2,
  hasImage // Add this prop to control the display of the image
}) => {
  const email = "haar.richard@gmail.com";
  const mailtoLink = `mailto:${email}`;

  console.log(primary);
  return (
    <>
    <MouseTracker>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading lightText={lightText}>{headline}</Heading>
                <TopLine>{topLine}</TopLine>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <a href={mailtoLink}
                    style={{
                      textDecoration: 'none',
                      color: 'inherit'
                    }}
                    >
                  <Button
                    as="span"
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
                  </a>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <SubtitleTwo darkText={darkText}>{descriptionTwo}</SubtitleTwo>
              <SubtitleThree darkText={darkText}>{descriptionThree}</SubtitleThree>
              {hasImage && ( // Conditionally render the image section
                <ImgWrap>
                  <Img src={img} alt={alt} />
                </ImgWrap>
              )}
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
      </MouseTracker>
    </>
  );
};

export default InfoSection;