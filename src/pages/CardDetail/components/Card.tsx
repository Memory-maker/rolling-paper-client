import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { cardColor } from "../../../theme/color";
import cardDummy from "../../RollingPaper/utils/cardDummy";

const Card = () => {
  const cardId = useParams().cardId as string;
  return (
    <CardContainer background={cardDummy[cardId].background} font={cardDummy[cardId].font}>
      {cardDummy[cardId].content}
    </CardContainer>
  );
};

export default Card;
interface CardContainerProps {
  background: string;
  font: string;
}

const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  background-color: ${(props) => cardColor[props.background]};
  border-radius: 20px;
`;
