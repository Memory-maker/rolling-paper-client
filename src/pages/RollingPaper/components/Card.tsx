import React from "react";
import styled from "styled-components";
import { cardColor, colors } from "../../../theme/color";
import CardType from "../utils/Card.type";
import cardDummy from "../utils/cardDummy";

interface CardProps {
  id: string;
  index: number;
}

const Card = ({ index, id }: CardProps) => {
  const card = cardDummy[id];
  return (
    <CardContainer index={index} background={card?.background} font={card?.font}>
      {card?.content}
    </CardContainer>
  );
};

export default Card;

interface CardContainerProps {
  background: string;
  font: string;
  index: number;
}

const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  padding: 20px;
  width: 160px;
  height: 160px;
  box-sizing: border-box;
  background-color: ${(props) => cardColor[props.background]};
  border-radius: 20px;
  transform: ${(props) => (props.index % 2 === 0 ? "rotate(-10deg)" : "rotate(10deg)")};
`;
