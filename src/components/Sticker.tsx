import React, { useState } from "react";
import { Rnd } from "react-rnd";
import styled, { keyframes } from "styled-components";
export interface StickerAttr {
  size?: number;
  type: StickerType;
  rotate?: number;
  x?: number;
  y?: number;
  num?: number;
}
export interface StickerProps {
  stickerAttr: StickerAttr;
  onCreate?: () => void;
  setStickerAttr?: (newAttr: StickerAttr) => void;
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
  const { stickerAttr, onCreate, setStickerAttr, changeMode } = props;
  const size = stickerAttr.size ? stickerAttr.size : 40;
  return (
    <Container
      size={{ width: size, height: size }}
      position={{ x: stickerAttr.x, y: stickerAttr.y }}
      minWidth={20}
      minHeight={20}
      onClick={() => {
        if (props.onCreate) {
          props.onCreate();
        } else {
          setClicked(true);
          setTimeout(() => setClicked(false), 1000);
        }
      }}
      disableDragging={!changeMode}
      // onDragStop={(e, d) => setStickerAttr({ ...stickerAttr, x: d.x, y: d.y })}
      // onResize={(e, direction, ref, delta, position) => {
      //   setStickerAttr({
      //     width: ref.offsetWidth,
      //     height: ref.offsetHeight,
      //     ...stickerAttr,
      //   });
      // }}
      className={`sticker ${clicked}`}
      {...stickerAttr}
    ></Container>
  );
};

export default Sticker;

const Container = styled(Rnd)<StickerAttr>`
  cursor: pointer;
  z-index: ${(props) => (props.num ? props.num + 10 : 10)});
  background-position: center;
  position: ${(props) => (!props.x || !props.y) && "static"} !important;
  background-image: ${(props) => `url(/imgs/${props.type}.png)`};
  background-repeat: no-repeat;
  background-size: contain;

  transform: ${(props) => `rotate(${props.rotate ? props.rotate : 0}deg)`};

  // &:hover,
  // .clicked {
  //   animation-name: stickerAnimate;
  //   animation-duration: 1s;
  // }

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

// const Container = styled.div<StickerProps>`
//   cursor: pointer;
//   z-index: 10;
//   background-position: center;
//   position: ${(props) => (props.x || props.y) && "absolute"};
//   background-image: ${(props) => `url(/imgs/${props.type}.png)`};
//   background-repeat: no-repeat;
//   background-size: contain;

//   width: ${(props) => `${props.size ? props.size : 40}px`};
//   height: ${(props) => `${props.size ? props.size : 40}px`};

//   transform: ${(props) => `rotate(${props.rotate ? props.rotate : 0}deg)`};
//   top: ${(props) => `${props.y}px`};
//   left: ${(props) => `${props.x}px`};

//   &:hover,
//   .clicked {
//     animation-name: stickerAnimate;
//     animation-duration: 1s;
//   }

//   @keyframes stickerAnimate {
//     0% {
//       scale: 1;
//     }
//     25% {
//       scale: 1.2;
//       transform: ${(props) => `rotate(${props.rotate ? props.rotate + 10 : 10}deg)`};
//     }
//     50% {
//       transform: ${(props) => `rotate(${props.rotate ? props.rotate - 10 : -10}deg)`};
//     }
//     75% {
//       transform: ${(props) => `rotate(${props.rotate ? props.rotate + 10 : 10}deg)`};
//     }
//     100% {
//       scale: 1;
//       transform: ${(props) => `rotate(${props.rotate ? props.rotate : 0}deg)`};
//     }
//   }
// `;
