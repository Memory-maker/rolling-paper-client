import React from "react";
import styled from "styled-components";
export interface StickerProps {
  size?: number;
  type: "heart" | "confetti" | "cupcake" | "garlands" | "moon" | "present" | "clova" | "bear" | "sun";
  rotate: number;
  x: number;
  y: number;
}

const Sticker = ({ ...props }: StickerProps) => {
  return <Container className="sticker" {...props}></Container>;
};

export default Sticker;

const Container = styled.div<StickerProps>`
  z-index: 10;
  position: absolute;
  background-image: ${(props) => `url(imgs/${props.type}.png)`};
  background-repeat: no-repeat;
  background-size: contain;

  width: ${(props) => `${props.size ? props.size : 40}px`};
  height: ${(props) => `${props.size ? props.size : 40}px`};
  transform: ${(props) => `rotate(${props.rotate}deg)`};
  top: ${(props) => `${props.y}px`};
  left: ${(props) => `${props.x}px`};
`;
