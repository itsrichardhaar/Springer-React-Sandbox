import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* Center vertically */
  padding: 20px 0;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column; /* Vertically stack cards */
  align-items: center; /* Center horizontally */
  gap: 20px; /* Adjust the gap between cards */
`;

export const CardItem = styled.div`
  width: 400px; /* Ensure each card takes full width */
  max-width: 400px; /* Adjust maximum width as needed */
  background: transparent;
  border-radius: 10px;
  border: solid 2px #fff;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column; /* Stack content vertically within each card */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  &:hover {
    background: rgba(30,41,59,.5);
  }

  @media screen and (max-width: 768px) {
    width: auto;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const CardDate = styled.p`
  font-size: 0.75rem;
  color: rgb(148 163 184);
  text-transform: uppercase;
  letter-spacing: .1em;
  margin-bottom: 10px;
  text-decoration: none !important;
`;

export const CardInfo = styled.div`
  padding: 20px;
  color: #fff !important;
  text-decoration: none !important;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  text-decoration: none !important;
`;

export const CardText = styled.p`
  font-size: 0.75rem;
  color: rgb(148 163 184) !important;
  text-decoration: none !important;
`;

export const CardRole = styled.p`
  font-size: 1rem;
  color: rgb(148 163 184) !important;
  text-decoration: none !important;
`;

export const TagWrapper = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr); /* Three columns */
grid-gap: 10px; /* Adjust the gap between tags */
margin-top: 10px;
width: 80%;
text-decoration: none !important;
`;

export const Tag = styled.p`
    background: rgba(45,212,191,.1);
    color: rgb(94 234 212);
    width: 100%;
    font-size: 0.8rem;
    text-align: center;
    border-radius: 15px;
    padding-top: .25rem;  
    padding-bottom: .25rem;
    padding-left: .75rem;  
    padding-right: .75rem;
    margin-top: 5px;
    text-decoration: none !important;
    align-content: center;
`;