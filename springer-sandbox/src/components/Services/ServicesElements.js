import styled from 'styled-components';

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0083bf;

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
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

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
  align-items: center;
  border-radius: 10px;
  max-height: 440px;
  padding: 30px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    background: rgb(15 23 42);
  }
`;

export const ServicesArrow = styled.div`
  content: ">";
  color: #fff;
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
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
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #fff;
  margin-bottom: 20px;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

