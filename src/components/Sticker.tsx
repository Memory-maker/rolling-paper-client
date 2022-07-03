import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
export interface StickerProps {
  size?: number;
  type: StickerType;
  rotate?: number;
  x?: number;
  y?: number;
  onCreate?: () => void;
  changeMode?: boolean;
}

export enum StickerType {
  heart = "heart",
  confetti = "confetti",
  cupcake = "cupcake",
  garlands = "garlands",
  moon = "moon",
  present = "present",
  clova = "clova",
  bear = "bear",
  sun = "sun",
}

const Sticker = ({ ...props }: StickerProps) => {
  const [clicked, setClicked] = useState(false);
  return (
    <Container
      onClick={() => {
        if (props.onCreate) {
          props.onCreate();
        } else {
          setClicked(true);
          setTimeout(() => setClicked(false), 1000);
        }
      }}
      className={`sticker ${clicked}`}
      {...props}
    ></Container>
  );
};

export default Sticker;

const Container = styled.div<StickerProps>`
  cursor: pointer;
  z-index: 10;
  background-position: center;
  position: ${(props) => (props.x || props.y) && "absolute"};
  background-image: ${(props) => `url(/imgs/${props.type}.png)`};
  background-repeat: no-repeat;
  background-size: contain;

  width: ${(props) => `${props.size ? props.size : 40}px`};
  height: ${(props) => `${props.size ? props.size : 40}px`};

  transform: ${(props) => `rotate(${props.rotate ? props.rotate : 0}deg)`};
  top: ${(props) => `${props.y}px`};
  left: ${(props) => `${props.x}px`};

  &:hover,
  .clicked {
    animation-name: stickerAnimate;
    animation-duration: 1s;
  }

  @keyframes stickerAnimate {
    0% {
      scale: 1;
    }
    25% {
      scale: 1.2;
      transform: ${(props) => `rotate(${props.rotate ? props.rotate + 10 : 10}deg)`};
    }
    50% {
      transform: ${(props) => `rotate(${props.rotate ? props.rotate - 10 : -10}deg)`};
    }
    75% {
      transform: ${(props) => `rotate(${props.rotate ? props.rotate + 10 : 10}deg)`};
    }
    100% {
      scale: 1;
      transform: ${(props) => `rotate(${props.rotate ? props.rotate : 0}deg)`};
    }
  }
`;
