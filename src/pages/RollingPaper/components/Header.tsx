import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../../theme/color";
import { RollingPaper } from "../utils/RollingPaper.type";
import ShareButton from "./ShareButton";
import StickerButton from "./StickerButton";

interface HeaderProps {
  infos: RollingPaper;
}

const Header = ({ infos }: HeaderProps) => {
  const [show, setShow] = useState(false);
  return (
    <Container>
      <Title isDark={false}>
        <span>
          <NickName>{infos.userName}</NickName>
          님의
        </span>
        <span>"{infos.title}"</span>
      </Title>
      <Buttons>
        <ShareButton />
        {/* <StickerButton show={show} setShow={setShow} /> */}
      </Buttons>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 110px;
  padding: 18px 16px;
  display: flex;
  justify-content: space-between;
`;

interface TitleProps {
  isDark: boolean;
}
const Title = styled.div<TitleProps>`
  display: flex;
  flex-direction: column;
  font-size: 32px;
  color: ${(props) => (props.isDark ? colors.WHITE_COLOR : "#000000")};
  span {
    display: flex;
  }
`;

const NickName = styled.div`
  color: ${colors.SUBPOINT_COLOR};
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
