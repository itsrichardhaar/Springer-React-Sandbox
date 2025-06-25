import styled from 'styled-components';

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(15, 23, 42);

  @media screen and (max-width: 768px) {
    height: auto;
    padding-top: 80px;
    padding-bottom: 80px;
  }

  @media screen and (max-width: 480px) {
    height: auto;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 20px;
  padding: 0 40px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  border-radius: 10px;
  max-height: 440px;
  height: 405px;
  padding: 0px;
  border: solid 2px rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease-in-out;
  overflow: hidden;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    background: rgba(30, 41, 59, 0.5);
    border: solid 2px rgba(255, 255, 255, 1);
  }
`;

export const ServicesArrow = styled.div`
  content: ">";
  color: #fff;
`;

export const ServicesIcon = styled.img`
  height: auto;
  width: 100%;
  margin-bottom: 20px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 1000px) {
    margin-bottom: 0px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 80px;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #fff;
  text-align: left;
  padding-left: 20px
`;

export const ServicesP = styled.p`
  font-size: .875rem;
  text-align: left;
  color: rgb(148, 163, 184) !important;
  margin-bottom: 20px;
  line-height: 1.5;
  padding-left: 20px;
  padding-right: 20px;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(15, 23, 42, 0.5); // dark bluish overlay
    z-index: 1;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    position: relative;
    z-index: 0;
  }
`;

