import React from "react";
import styled from "styled-components";
import Logo from "../../components/Logo";
import Title from "../../components/Title";
import { colors } from "../../theme/color";
import Card from "./components/Card";
import cardDummy from "./utils/cardDummy";
import { ReactComponent as KakaoIcon } from "/src/assets/svgs/kakao.svg";
interface CardProps {
  content: string;
  background: string;
  rotate: string;
}

const Wrapper = styled.div`
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
  background-color: ${colors.MAIN_BG};
`;

const TitleWrapper = styled.div`
  margin: 20px 0;
`;

const Content = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: 400;
`;

const CardList = styled.div`
  display: grid;
  row-gap: 10px;
	column-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin: 20px 0;
`;

const KakaoLogo = styled(KakaoIcon)`
  position: absolute;
  left: 16px;
`;

const KakaoButton = styled.div`
  position: absolute;
  bottom: 42px;
  width: 328px;
  height: 53px;
  background-color: ${colors.KAKAO_COLOR};
  font-family: Noto Sans KR;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <Wrapper>
      <Logo />
      <TitleWrapper>
        <Title />
      </TitleWrapper>
      <CardList>
        {cardDummy.map((props: CardProps) => (
          <Card content={props.content} background={props.background} rotate={props.rotate} />
        ))}
      </CardList>
      <Content>추억의 롤링페이퍼에서</Content>
      <Content>추억을 만들고 간직하세요!</Content>
      <KakaoButton>
        <KakaoLogo />
        <div>카카오 계정으로 시작하기</div>
      </KakaoButton>
    </Wrapper>
  );
};

export default Home;
