import styled from "styled-components";

export const Header = styled.header`
  background-color: #8bbac0;
  padding: 22px 250px;
  border: 0px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const Links = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
  gap: 16px;
`;

export const LinkHeader = styled.li`
  font-family: Montserrat;
  font-size: 24px;
  margin-right: 15px;
  color: white;
  font-weight: 700;
  cursor: pointer;
`;

export const Link = styled.li`
  font-family: Montserrat;
  font-size: 14px;
  color: white;
  font-weight: 700;
  cursor: pointer;
`;

export const Buttons = styled.ul`
  display: flex;
  list-style: none;
  gap: 40px;
  align-items: center;
`;
