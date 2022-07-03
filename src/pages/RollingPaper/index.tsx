import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Sticker, { StickerProps, StickerType } from "../../components/Sticker";
import { colors } from "../../theme/color";
import Modal from "../Modal";
import Card from "./components/Card";
import Detail from "./components/Detail";
import Header from "./components/Header";
import MakeButton from "./components/MakeButton";
import StickerList from "./components/StickerList";
import cardDummy from "./utils/cardDummy";
import { v4 as uuidv4 } from "uuid";

const RollingPaper = () => {
  const rollingPaperId = useParams().rollingPaperId;
  const [showDetail, setShowDetail] = useState(false);
  const [shareModalShow, setShareModalShow] = useState(false);
  const [stickerModalShow, setStickerModalShow] = useState(false);
  const [cardIndex, setCardIndex] = useState<number>(0);
  const [stickers, setStickers] = useState<{ [id: string]: StickerProps }>({
    a: { type: StickerType.heart, x: 0, y: 130 },
    b: { type: StickerType.bear, x: 150, y: 160, rotate: 15 },
  });

  const addSticker = (type: StickerType) => {
    const newId = uuidv4();
    setStickers({ ...stickers, [newId]: { type: type, x: 200, y: 200, changeMode: true } });
  };

  const handleClick = (id: number) => {
    setShowDetail(true);
    setCardIndex(id);
  };
  const onPrev = () => {
    if (0 === cardIndex) {
      setCardIndex(dummy.cards.length - 1);
    } else {
      setCardIndex(cardIndex - 1);
    }
  };
  const onNext = () => {
    if (dummy.cards.length - 1 === cardIndex) {
      setCardIndex(0);
    } else {
      setCardIndex(cardIndex + 1);
    }
  };
  const navigate = useNavigate();
  return (
    <Container isDark={dummy.theme === "dark" ? true : false}>
      <Header
        infos={dummy}
        setShareModalShow={() => setShareModalShow(!shareModalShow)}
        setStickerModalShow={() => setStickerModalShow(!stickerModalShow)}
        stickerModalShow={stickerModalShow}
      />
      <Content>
        {Object.keys(stickers).map((id) => {
          const config = { ...stickers[id], changeMode: stickerModalShow };
          return <Sticker key={id} {...config} />;
        })}
        {dummy.cards.map((card, index) => (
          <Card index={index} key={index} card={card} handleClick={() => handleClick(index)} />
        ))}
      </Content>
      <ButtonContainer>
        <MakeButton handleClick={() => navigate("/editor")} />
      </ButtonContainer>
      {shareModalShow && !stickerModalShow && (
        <Modal setIsModalOpen={setShareModalShow}>
          <ModalText>복사 완료!</ModalText>
        </Modal>
      )}
      {stickerModalShow && !shareModalShow && <StickerList addSticker={addSticker} />}
      {showDetail && (
        <Detail card={dummy.cards[cardIndex]} onPrev={onPrev} onNext={onNext} setShowDetail={setShowDetail} />
      )}
    </Container>
  );
};

export default RollingPaper;

interface ContainerProps {
  isDark: boolean;
}

const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 480px;
  min-width: 380px;
  width: 100%;
  height: 100%;
  overflow: scroll;
  background: ${(props) => (props.isDark ? colors.DARK_BG_COLOR : colors.MAIN_BG)};
`;

const Content = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 auto;
  padding: 16px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 36px;
  width: 100%;
  display: flex;
  justify-content: center;
  left: 0;
`;
const ModalText = styled.div`
  font-size: 48px;
  text-align: center;
`;

const dummy = {
  cards: [
    {
      content: `안녕 레몬아너는 참 귀여워
그동안 우리 일정관리
해주고 MC해줘서
정말 고마워
앞으로 잘부탁하구
우리 화이팅하자~!`,
      background: "CARD_BLUE",
      font: "default",
    },
    {
      content: `안녕 레몬아너는 참 귀여워
그동안 우리 일정관리
해주고 MC해줘서
정말 고마워
앞으로 잘부탁하구
우리 화이팅하자~!`,
      background: "CARD_RED",
      font: "default",
    },
    {
      content: `안녕 레몬아너는 참 귀여워
그동안 우리 일정관리
해주고 MC해줘서
정말 고마워
앞으로 잘부탁하구
우리 화이팅하자~!`,
      background: "CARD_PURPLE",
      font: "default",
    },
    {
      content: `안녕 레몬아너는 참 귀여워
그동안 우리 일정관리
해주고 MC해줘서
정말 고마워
앞으로 잘부탁하구
우리 화이팅하자~!`,
      background: "CARD_GREEN",
      font: "default",
    },
    {
      content: `안녕 레몬아너는 참 귀여워
그동안 우리 일정관리
해주고 MC해줘서
정말 고마워
앞으로 잘부탁하구
우리 화이팅하자~!`,
      background: "CARD_YELLOW",
      font: "default",
    },
  ],
  userName: "레몬은 귀여워",
  paperId: 0,
  title: "3학년 2반",
  dueDate: new Date(),
  theme: "light",
  paperUrl: "",
  opeanStatus: "Y",
};
