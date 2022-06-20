import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../theme/color";
import Card from "./components/Card";
import Header from "./components/Header";
import MakeButton from "./components/MakeButton";

const RollingPaper = () => {
  const rollingPaperId = useParams().rollingPaperId;
  const dummy = {
    cardIds: ["1", "2", "3"],
    userName: "레몬은 귀여워",
    paperId: 0,
    title: "3학년 2반",
    dueDate: new Date(),
    theme: "light",
    paperUrl: "",
    opeanStatus: "Y",
  };

  return (
    <Container isDark={dummy.theme === "dark" ? true : false}>
      <Header infos={dummy} />
      <Content>
        {dummy.cardIds.map((id, index) => (
          <Card index={index} key={id} id={id} />
        ))}
      </Content>
      <ButtonContainer>
        <MakeButton />
      </ButtonContainer>
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
  background: ${(props) => (props.isDark ? colors.DARK_BG_COLOR : colors.MAIN_BG)};
`;

const Content = styled.div`
  display: flex;
  padding: 16px;
`;

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 36px;
  width: 100%;
  display: flex;
  justify-content: center;
  left: 0;
`;
