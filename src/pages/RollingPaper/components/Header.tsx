import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../../theme/color";
import Modal from "../../ModalContainer";
import { RollingPaper } from "../utils/RollingPaper.type";
import ShareButton from "./ShareButton";
import StickerButton from "./StickerButton";

interface HeaderProps {
  infos: RollingPaper;
  setShareModalShow: () => void;
  setStickerModalShow: () => void;
  stickerModalShow: boolean;
}

const Header = ({ infos, setShareModalShow, setStickerModalShow, stickerModalShow }: HeaderProps) => {
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
        <ShareButton setShow={setShareModalShow} />
        <StickerButton stickerModalShow={stickerModalShow} setShow={setStickerModalShow} />
      </Buttons>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  z-index: 10;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 110px;
  padding: 18px 16px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
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
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 8px;
`;
