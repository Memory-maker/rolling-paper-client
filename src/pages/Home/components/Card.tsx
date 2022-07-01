import React from "react";
import styled from "styled-components";
import { cardColor } from "../../../theme/color";

interface Card {
  content: string;
  background: string;
  rotate: string;
}

interface CardContainer {
  background: string;
  rotate: string;
}

const CardContainer = styled.div<CardContainer>`
  min-width: 85px;
  min-height: 85px;
  align-self: stretch;
  justify-self: stretch;

  text-align: center;
  line-height: 85px;
  border-radius: 20px;
  background-color: ${(props) => cardColor[props.background]};
  transform: ${(props) => `rotate(${props.rotate}deg)`};
`;

const Card = ({ content, background, rotate }: Card) => {
  return (
    <CardContainer className="card" background={background} rotate={rotate}>
      {content}
    </CardContainer>
  );
};

export default Card;
