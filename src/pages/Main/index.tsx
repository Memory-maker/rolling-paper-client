import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import theme from "../../theme";

const Wrapper = styled.div`
  width: 100vw;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #c9f5cb;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: green;
`;

const Button = styled.button`
  width: 200px;
`;

function Main() {
  const navigate = useNavigate();
  const handleClickButton = useCallback(() => {
    navigate("/mypage");
  }, []);

  return (
    <Wrapper>
      <Title>롤링페이퍼</Title>
      <Button onClick={handleClickButton}>예시로 이동</Button>
    </Wrapper>
  );
}

export default Main;
