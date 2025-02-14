import styled from "styled-components";

export const PricingSection = styled.section`
  padding: 140px 195px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  background-color: rgb(45, 64, 89);
`;

export const PricingCardList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  justify-content: space-between;
`;

export const PricingCard = styled.li`
  gap: 40px;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 50px;
  background-color: ${(props) =>
    props.primary ? "white" : "rgb(42, 124, 199)"};
`;

export const IsNew = styled.img`
  position: absolute;
  top: -30px;
  right: -50px;
`;

export const RoundHeart = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 200px;
  background-color: ${(props) =>
    props.primary ? " rgb(150, 187, 124)" : "white"};
  color: ${(props) => (props.primary ? "white" : " rgb(150, 187, 124)")};
  align-items: center;
  justify-content: center;
  display: flex;
  & i {
    font-size: 45px;
  }
`;

export const FreeText = styled.p`
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${(props) => (props.primary ? "rgb(37, 43, 66)" : "white")};
`;

export const Paragraph1 = styled.p`
  width: 140px;
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => (props.primary ? "rgb(115, 115, 115)" : "white")};
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Price = styled.p`
  font-family: Montserrat;
  font-size: 40px;
  font-weight: 700;
  color: ${(props) => (props.primary ? "rgb(150, 187, 124)" : "white")};
`;

export const PriceText = styled.p`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
  color: rgb(142, 194, 242);
`;

export const Paragraph2 = styled.p`
  width: 200px;
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => (props.primary ? "rgb(115, 115,115)" : "white")};
`;

export const PricingButton = styled.button`
  padding: 15px 70px;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  text-align: center;
  color: white;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
  background-color: ${(props) =>
    props.primary ? "rgb(150, 187, 124)" : "rgb(45, 192, 113)"};
`;

export const CheckboxList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;

export const Checkbox = styled.li`
  display: flex;
  gap: 7px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
  align-items: center;
  color: ${(props) => (props.primary ? "rgb(37, 43, 66)" : "white")};
`;
