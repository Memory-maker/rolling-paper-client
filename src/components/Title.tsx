import { ReactNode } from "react";
import styled from "styled-components";
import { colors } from "../theme/color";

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("src/assets/imgs/logo.png");
  background-position: center center;
  background-size: contain;
  width: 300px;
  height: 220px;
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
    <Logo/>
  )
}

export default Title;
