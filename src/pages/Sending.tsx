import React from "react";
import styled from "styled-components";
import GotoBack from "../assets/back-arrow.png";

import Title from "../components/Title";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.MAIN_BG};
`;

const Header = styled.header`
  padding: 65px 0 0 29px;
`;

const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 680px;
  min-width: 380px;
  width: 100%;
  height: 100vh;
  padding: 42px;
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
  color: ${({ theme }) => theme.textColor.TEXT_YELLOW_COLOR};
  margin-right: 10px;
`;

const ShareButton = styled.button`
  width: 263px;
  height: 44px;
  left: 56px;
  top: 555px;

  margin-bottom: 16px;
  background: ${({ theme }) => theme.colors.POINT_COLOR};
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.POINT_COLOR};
  border-radius: 20px;

  font-family: "LeeSeoyun";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.WHITE_COLOR};
`;

const ShareWrapper = styled.div``;

interface ShareProps {
  sending_status: Boolean;
  nickname: String;
}

const Sending = (props: ShareProps) => {
  const navigate = useNavigate();
  const shareStatus = props.sending_status;
  const senindgMessage = shareStatus ? "전송 성공!" : "전송 실패ㅠㅠ";
  let nickname = props.nickname;
  nickname = "얌얌은 짱이야";

  return (
    <Container>
      <Header>
        <img src={GotoBack} alt="back button" onClick={() => navigate(-1)} />
      </Header>
      <Main>
        <Logo />
        <TitleWrapper>
          <Title />
        </TitleWrapper>
        <Contents>
          <UserInfo>
            <Username>{nickname}</Username>
            님에게
          </UserInfo>

          <SendStatusMessage>{senindgMessage}</SendStatusMessage>
        </Contents>

        {shareStatus ? <ShareButton>친구들한테 공유해볼까?</ShareButton> : <ShareButton>다시적기</ShareButton>}
        {shareStatus ? <ShareButton>나도 만들어볼까?</ShareButton> : <ShareButton>전송 취소하기</ShareButton>}
      </Main>
    </Container>
  );
};

export default Sending;
