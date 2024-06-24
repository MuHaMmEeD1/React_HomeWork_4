import styled from "styled-components";

export const FooterSection = styled.footer`
  display: flex;
  flex-direction: column;
`;

export const FooterLinks = styled.ul`
  padding: 50px 195px;
  display: flex;
  background-color: white;
  justify-content: space-between;
  align-items: center;
`;

export const FooterLinkItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const FooterLinkHeader = styled.h5`
  color: rgb(37, 43, 66);
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const FooterLinkParagraph = styled.p`
  color: rgb(115, 115, 115);
  cursor: pointer;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
`;

export const FooterImageContainer = styled.div`
  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const FooterLinkParagraph2 = styled.p`
  color: rgb(115, 115, 115);
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
  width: 252px;
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(229, 229, 229);
  padding: 25px 195px;
`;

export const Rights = styled.p`
  color: rgb(115, 115, 115);
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
`;

export const Logos = styled.ul`
  display: flex;
  gap: 25px;
  align-items: center;
  cursor: pointer;
`;
