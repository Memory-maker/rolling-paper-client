import { ReactNode } from "react";
import styled from "styled-components";
import { colors } from "../theme/color";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface Content {
  children: ReactNode;
};

const Content = styled.div<Content>`
  z-index: 3;
  font-family: ghanachoco;
  font-size: 48px;
  color: ${colors.POINT_COLOR};
`;

const Title = () => {
  return (
    <Wrapper>
      <Content>추억의</Content>
      <Content>롤링페이퍼</Content>
    </Wrapper>
  )
}

export default Title;
