import React from "react";
import styled from "styled-components";
import Sticker, { StickerProps, StickerType } from "../../../components/Sticker";

interface StickerListProps {
  addSticker: (type: StickerType) => void;
}

const StickerList = ({ addSticker }: StickerListProps) => {
  return (
    <Container>
      <Stickers>
        {Object.values(StickerType).map((type) => (
          <Sticker onCreate={() => addSticker(type)} stickerAttr={{ type: type }} key={type} />
        ))}
      </Stickers>
    </Container>
  );
};

export default StickerList;
const Container = styled.div`
  z-index: 8;
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 32px 16px;
`;
const Stickers = styled.div`
  z-index: 20;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 16px;
  justify-items: center;
  box-sizing: border-box;
  padding: 32px 16px;
`;
