import React, { SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../components/Logo";
import Title from "../../components/Title";
import Card from "./components/Card";
import cardDummy from "./utils/cardDummy";
import { ReactComponent as KakaoIcon } from "/src/assets/svgs/kakao.svg";
import { login_API, singup_API } from "../../api/user";
import { kakaoToken, kakaoServerRes, kakaoProfile } from "../../types/login";
import getCookie from "../../utils/cookie";
import { colors } from "../../theme/color";

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
  background-color: ${colors["MAIN_BG"]};
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

const KakaoButton = styled.img`
  position: absolute;
  bottom: 42px;
  cursor: pointer;
`;

interface CardProps {
  content: string;
  background: string;
  rotate: string;
}

const Home = () => {
  const navigate = useNavigate();
  const kakaoJsKey = import.meta.env.VITE_JS_KEY;
  const [token, setToken] = useState("");
  const [data, setData] = useState<kakaoProfile | null>(null);

  const kakaoLogin = () => {
    window.Kakao.Auth.login({
      success: function (serverResponse: kakaoToken) {
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: function ({ kakao_account, id }: kakaoServerRes) {
            // const userData = {
            //   id,
            //   profile: kakao_account.profile,
            // };
            // setData(userData);
            navigate("/mypage");
          },
          fail: function (error: unknown) {
            console.log(error);
          },
        });
      },
      fail: function (error: unknown) {
        console.log(error);
      },
    });
  };

  // const login = async () => {
  //   // 1. 쿠키에서 세션 아이디 꺼낸 뒤, 로그인 api 요청
  //   // 2. 서버에서 세션 id 검증 후, 만료안되었고 유요한 세션이면 200, 아니면 에러

  //   //const sessionId = document.cookie
  //   //쿠키 키값을 현재 토마토에게서 모르는 상태 => 예시: 토마토
  //   const sessionId = getCookie("tomato");
  //   const result = await login_API(sessionId);
  //   if (result?.status !== 200) {
  //     //로그인 api결과가 200아닌 경우 즉, 회원가입시켜야 함! 그후 페이지 이동등 추후 처리!
  //     kakaoLogin();
  //     await singup_API(data);
  //     //페이지 이동 등 사후 처리..!
  //   } else {
  //     //200인 경우 = 세션 유효, 이미 회원가입한 저장된 회원 즉! 로그인
  //     // 페이지 이동등 , 뭔가 액션??
  //   }
  // };

  // const onHandleClick = () => {
  //   login();
  // };

  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      // JavaScript key를 인자로 주고 SDK 초기화
      window.Kakao.init(kakaoJsKey);
      // SDK 초기화 여부를 확인하자.
      console.log(window.Kakao.isInitialized());
    }
  }, [kakaoJsKey]);

  return (
    <Wrapper>
      <TitleWrapper>
        <Title />
      </TitleWrapper>
      <CardList>
        {cardDummy.map((props: CardProps, index) => (
          <Card key={index} content={props.content} background={props.background} rotate={props.rotate} />
        ))}
      </CardList>
      <Content>추억의 롤링페이퍼에서</Content>
      <Content>추억을 만들고 간직하세요!</Content>
      <KakaoButton src={`./imgs/kakao-login.png`} onClick={kakaoLogin} />
    </Wrapper>
  );
};

export default Home;
