import React, { useEffect } from "react";
import styled from "styled-components";

interface KakaoShareData {
  shareUrl: string;
  contents: {
    title: string;
    description: string;
  };
}

const kakaoShareButton = ({ shareUrl, contents }: KakaoShareData) => {
  const createKakaoBtn = () => {
    window.Kakao.Link.createDefaultButton({
      container: "#kakao-link-btn",
      objectType: "feed",
      content: {
        title: "롤링 페이어 써볼래??", // 공유될 제목
        description: "목이 긴 기린에게 토미야 !톡쏘는 레몬과 토마토를 먹으며, 냠냠양이의 롤링페이퍼를 써볼까?", // 공유될 설명
        // imageUrl: "", // 공유될 이미지 url
        link: {
          webUrl: `${shareUrl}`, // 공유될 웹 URL
        },
      },
    });
  };

  useEffect(() => {
    createKakaoBtn();
  }, []);

  return (
    <Wrapper>
      <StyledButton type="button" id="kakao-link-btn">
        카카오로 공유하기
        <img src="/imgs/kakaoicon.png" alt="kakao-share-icon" />
      </StyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const StyledButton = styled.button`
  img {
    width: 100%;
  }
  font-size: 25px;
`;

export default kakaoShareButton;
