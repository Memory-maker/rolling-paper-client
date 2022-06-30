import React, { MouseEvent } from "react";
import styled from "styled-components";
import { cardColor } from "../../../theme/color";
import { fonts } from "../../../theme/font";
import Card from "../utils/Card.type";
import CloseButton from "./CloseButton";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
interface DetailProps {
  setShowDetail: (showDetail: boolean) => void;
  card: Card;
  onPrev: () => void;
  onNext: () => void;
}
const Detail = ({ setShowDetail, onPrev, onNext, card }: DetailProps) => {
  return (
    <Container>
      <CloseButtonContainer>
        <CloseButton handleClick={() => setShowDetail(false)} />
      </CloseButtonContainer>
      <CardContainer background={card?.background} font={card?.font}>
        {card?.content}
      </CardContainer>
      <ButtonContainer>
        <LeftButton handleClick={onPrev} />
        <span>from. 익명</span>
        <RightButton handleClick={onNext} />
      </ButtonContainer>
    </Container>
  );
};
export default Detail;

const Container = styled.div`
  z-index: 20;
  position: absolute;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 66px 16px 16px;
  margin-bottom: 66px;
`;

interface CardContainerProps {
  background: string;
  font: string;
}

const CardContainer = styled.div<CardContainerProps>`
  width: 100%;
  font-size: 32px;
  padding: 66px 40px;
  box-sizing: border-box;
  background-color: ${(props) => cardColor[props.background]};
  font-family: ${(props) => fonts[props.font]};
  border-radius: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 66px;
  font-size: 32px;
  width: 100%;
  justify-content: space-between;
  div {
    cursor: pointer;
  }
`;

const CloseButtonContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  padding: 0 24px 24px 48px;
  box-sizing: border-box;
  cursor: pointer;
`;
