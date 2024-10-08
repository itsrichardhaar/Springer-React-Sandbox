import styled from 'styled-components';
import { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {

  opacity: 0;

  }
  to {

  opacity: 1;

  }
`;

const slideIn = keyframes`
  from {

  transform: translateY(30px);
  opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
    
`;

const slideSlowIn = keyframes`
  from {

  transform: translateY(20px);
  opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
    
`;

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? 'rgb(15 23 42)' : 'rgb(15, 23, 42)')};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: auto !important;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, auto);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? "'col2 col1'" : "'col1 col2'"};
  /* Must use '\' css class \'' */

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.div`
  color: #2FDC78;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#fff')};
  

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.div`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 1.625;
  color: ${({ darkText }) => (darkText ? 'rgb(148 163 184)' : 'rgb(148 163 184)')};
`;

export const SubtitleTwo = styled.div`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 1.625;
  color: ${({ darkText }) => (darkText ? 'rgb(148 163 184)' : 'rgb(148 163 184)')};
`;

export const SubtitleThree = styled.div`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 1.625;
  color: ${({ darkText }) => (darkText ? '#2a302f' : 'rgb(148 163 184)')};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  margin-top: -100px;
`;

export const Img = styled.img`
  width: 300px;
  margin-top: 0;
  margin-right: 0;
  margin-left: 10px;
  padding-right: 0;
  border-radius: 50%;
  height: 300px;

  @media screen and (max-width: 600px) {
    margin-top: 40px;
  }
`;
