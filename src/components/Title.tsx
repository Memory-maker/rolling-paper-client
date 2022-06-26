import { ReactNode } from "react";
import styled from "styled-components";
import { colors } from "../theme/color";
import { ReactComponent as LogoIcon } from "/src/assets/svgs/logo.svg";
import { ReactComponent as LogoLeftIcon } from "/src/assets/svgs/logoLeft.svg";
import { ReactComponent as LogoRightIcon } from "/src/assets/svgs/logoRight.svg";
import { ReactComponent as Logo } from "/src/assets/svgs/logoText.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin: 0 7px;
    }
    margin-bottom: 24px;
  }
`;

const Title = () => {
  return (
    <Container>
      <div className="icon-container">
        <LogoLeftIcon className="plane-left" />
        <LogoIcon className="plane" />
        <LogoRightIcon className="plane-right" />
      </div>
      <Logo className="text" />
    </Container>
  );
};

export default Title;
