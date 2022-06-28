import React, { useState } from "react";
import styled from "styled-components";
import GotoBack from "../assets/back-arrow.png";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";
import { colors, textColor } from "../theme/color";
import Modal from "./Modal";
import { APP_BASE_URL } from "../constants/url";

interface ShareProps {
  sending_status?: boolean;
  nickname?: string;
}

const Sending = (props: ShareProps) => {
  const navigate = useNavigate();
  let shareStatus = props.sending_status;
  shareStatus = true;

  let nickname = props.nickname;
  nickname = "얌얌은 짱이야";

  const sendingMessage = shareStatus ? "전송 완료!" : "전송 실패 ㅠㅠ";
  const [show, setShow] = useState(false);

  const shareContents = async () => {
    const shareData = {
      title: `${nickname}의 롤링페이퍼`,
      text: `${nickname}와 함께 롤링페이퍼를 써볼까요?`,
      url: `${APP_BASE_URL}/rollingpaper`,
    };

    try {
      if (typeof window.navigator.share !== "undefined") {
        await window.navigator.share(shareData);
      }
    } catch (error: unknown) {
      console.log(error, "error");
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
              <ShareButton onClick={shareContents}>친구들한테 공유해볼까?</ShareButton>
              <ShareButton onClick={() => navigate("/")}>나도 만들어볼까?</ShareButton>
            </>
          ) : (
            <>
              <ShareButton onClick={() => navigate("/editor")}>다시적기</ShareButton>
              <ShareButton>전송 취소하기</ShareButton>
            </>
          )}
        </ButtonContainer>
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

const ShareButton = styled.button`
  width: 263px;
  height: 44px;
  left: 56px;
  top: 555px;

  margin-bottom: 16px;
  background: ${colors.POINT_COLOR};
  border: 1px solid;
  border-color: ${colors.POINT_COLOR};
  border-radius: 20px;

  font-family: "LeeSeoyun";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  color: ${colors.WHITE_COLOR};
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
