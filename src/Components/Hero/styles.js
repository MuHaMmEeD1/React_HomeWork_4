import styled from "styled-components";

export const HeroSection = styled.section`
  position: relative;
  background-color: #89b8be;
`;

export const HeroImg = styled.img`
  width: 100%;
`;

export const HeroContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  gap: 35px;
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 0 210px;
`;

export const HeroLink = styled.a`
  color: rgb(150, 187, 124);
  font-family: Montserrat;
  font-size: 16px;
  cursor: pointer;
  font-weight: 700;
`;

export const HeroHeader = styled.h1`
  font-family: Montserrat;
  font-size: 58px;
  font-weight: 700;
  color: white;
`;

export const HeroParagraph = styled.p`
  font-family: Montserrat;
  font-size: 20px;
  color: white;
  font-weight: 400;
`;
