import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../theme/color";
import Card from "./components/Card";
import Detail from "./components/Detail";
import Header from "./components/Header";
import MakeButton from "./components/MakeButton";
import cardDummy from "./utils/cardDummy";

const RollingPaper = () => {
  const rollingPaperId = useParams().rollingPaperId;
  const [showDetail, setShowDetail] = useState(false);
  const [cardIndex, setCardIndex] = useState<number>(0);
  const dummy = {
    cards: [ {
    content: `안녕 레몬아너는 참 귀여워
그동안 우리 일정관리
해주고 MC해줘서
정말 고마워
앞으로 잘부탁하구
우리 화이팅하자~!`,
    background: "CARD_BLUE",
    font: "default",
  }, {
    content: `안녕 레몬아너는 참 귀여워
그동안 우리 일정관리
해주고 MC해줘서
정말 고마워
앞으로 잘부탁하구
우리 화이팅하자~!`,
    background: "CARD_RED",
    font: "default",
  }, {
    content: `안녕 레몬아너는 참 귀여워
그동안 우리 일정관리
해주고 MC해줘서
정말 고마워
앞으로 잘부탁하구
우리 화이팅하자~!`,
    background: "CARD_PURPLE",
    font: "default",
  }, {
    content: `안녕 레몬아너는 참 귀여워
그동안 우리 일정관리
해주고 MC해줘서
정말 고마워
앞으로 잘부탁하구
우리 화이팅하자~!`,
    background: "CARD_GREEN",
    font: "default",
  },],
    userName: "레몬은 귀여워",
    paperId: 0,
    title: "3학년 2반",
    dueDate: new Date(),
    theme: "light",
    paperUrl: "",
    opeanStatus: "Y",
  };
  const handleClick = (id: number) => {
    setShowDetail(true);
    setCardIndex(id);
  }
  const onPrev =() =>{
    if(0 === cardIndex){
      setCardIndex(dummy.cards.length); 
    }else{
      setCardIndex(cardIndex-1);
    }
  }
  const onNext =() =>{
    if(dummy.cards.length === cardIndex){
      setCardIndex(0); 
    }else{
      setCardIndex(cardIndex+1);
    }
  }
 const navigate = useNavigate();
  return (
    <Container isDark={dummy.theme === "dark" ? true : false}>
      <Header infos={dummy} />
      <>
      <Content>
        {dummy.cards.map((card, index) => (
          <Card index={index} key={index} card={card} handleClick={() => handleClick(index)}/>
        ))}
      </Content>
      <ButtonContainer>
        <MakeButton handleClick={() => navigate('/editor')} />
      </ButtonContainer>
      </>
      {showDetail && <Detail card={dummy.cards[cardIndex]} onPrev={onPrev} onNext={onNext} setShowDetail={setShowDetail}/>}
    </Container>
    
  );
};

export default RollingPaper;

interface ContainerProps {
  isDark: boolean;
}

const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 680px;
  min-width: 380px;
  width: 100%;
  height: 100vh;
  overflow: scroll;
  background: ${(props) => (props.isDark ? colors.DARK_BG_COLOR : colors.MAIN_BG)};
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  padding: 16px;
  flex-wrap: wrap;
`;

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 36px;
  width: 100%;
  display: flex;
  justify-content: center;
  left: 0;
`;
