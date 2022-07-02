import React, { useState } from "react";
import styled from "styled-components";
import GotoBack from "../assets/back-arrow.png";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";
import { colors, textColor } from "../theme/color";
import { APP_BASE_URL } from "../constants/url";
import { shareContent } from "../utils/share";
import MoalContainer from "./ModalContainer";
import ShareRoll from "../pages/CreateRoll/ShareRoll/index";

import Button from "../components/Button";

interface ShareProps {
  sending_status?: boolean;
  nickname?: string;
}

const Sending = (props: ShareProps) => {
  const navigate = useNavigate();
  let nickname = props.nickname;
  nickname = "레몬";
  let shareStatus = props.sending_status;
  shareStatus = true;

  const sendingMessage = shareStatus ? "전송 완료!" : "전송 실패 ㅠㅠ";
  const [show, setShow] = useState(false);
  const shareData = {
    title: `${nickname}의 롤링페이퍼`,
    text: `${nickname}와 함께 롤링페이퍼를 써볼까요?`,
    url: `${APP_BASE_URL}/rollingpaper`,
  };

  const onHandleShare = () => {
    if (typeof window.navigator.share !== "undefined") {
      shareContent(shareData);
    } else {
      //
    }
  };

  return (
    <Container>
      <Header>
        <img src={GotoBack} alt="back button" onClick={() => navigate("/rollingpaper")} />
      </Header>
      <Main>
        <TitleWrapper>
          <Title />
        </TitleWrapper>
        <Contents>
          <UserInfo>
            <Username>{nickname}</Username>
            님에게
          </UserInfo>

          <SendStatusMessage>{sendingMessage}</SendStatusMessage>
        </Contents>
        <ButtonContainer>
          {shareStatus ? (
            <>
              <Button onClick={onHandleShare}>친구들한테 공유해볼까?</Button>
              <Button onClick={() => navigate("/")}>나도 만들어볼까?</Button>
            </>
          ) : (
            <>
              <Button onClick={() => navigate("/editor")}>다시적기</Button>
              <Button>전송 취소하기</Button>
            </>
          )}
        </ButtonContainer>

        {/* <MoalContainer>
          <ShareRoll />
        </MoalContainer> */}

        {show && <Modal setIsModalOpen={setShow} children={<ModalText>복사 완료!</ModalText>} />}
      </Main>
    </Container>
  );
};

export default Sending;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 480px;
  min-width: 380px;
  width: 100%;
  height: 100vh;
`;

const Header = styled.header`
  width: 100%;
  padding: 24px;
  height: 100px;
  background-color: ${colors.MAIN_BG};
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${colors.MAIN_BG};
  box-sizing: border-box;
`;

const TitleWrapper = styled.div`
  margin: 20px 0;
`;

const Contents = styled.div`
  margin: 48px 0 76px 0;
`;

const UserInfo = styled.div`
  display: flex;
  font-size: 32px;
  font-weight: 400;
  margin-top: 2px;
`;

const SendStatusMessage = styled.p`
  text-align: center;
  font-size: 32px;
  font-weight: 400;
  margin-top: 2px;
`;

const Username = styled.p`
  color: ${textColor.TEXT_YELLOW_COLOR};
  margin-right: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalText = styled.div`
  font-size: 48px;
  text-align: center;
`;
