import styled from "styled-components";
import { useCallback, useEffect, useRef, useState } from "react";
import { ReactComponent as ShareIcon } from "/src/assets/svgs/share.svg";
import { ReactComponent as ClipboardIcon } from "/src/assets/svgs/Text-files.svg";
import { modalColors } from "../../theme/color";
import Button from "../Button";
import { APP_BASE_URL } from "../../constants/url";
import { shareContentWithWebapi } from "../../utils/share";
import ModalContainer from "../../pages/ModalContainer";
import KakaoShareButton from "../kakaoShareButton";

interface ShareModalProps {
  paperUrl: string;
  modalTitle?: string;
}

function ShareModal({ paperUrl, modalTitle = "" }: ShareModalProps) {
  const [showKakaoBtn, setShowkakaoBtn] = useState(false);
  const kakaoJsKey = import.meta.env.VITE_JS_KEY;
  const kakaoShareBtn = useRef();

  const shareUrl = `${APP_BASE_URL}/${paperUrl}`;

  function copyToClipboard() {
    const t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = shareUrl;
    t.select();
    document.execCommand("copy");
    document.body.removeChild(t);
  }

  const handleClickButton = useCallback(() => {
    copyToClipboard();
  }, []);

  const onHandleShare = async () => {
    /* shareData props Exmaple
    const shareData = {
       title: `${nickname}의 롤링페이퍼`,
      text: `${nickname}와 함께 롤링페이퍼를 써볼까요?`,
      url: `${APP_BASE_URL}/rollingpaper`,
    };
  */
    if (typeof window.navigator.share !== "undefined") {
      shareContentWithWebapi(shareData);
    } else {
      //webs api환경 아닐시!
      setShowkakaoBtn(!showKakaoBtn);
    }
  };

  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      // JavaScript key를 인자로 주고 SDK 초기화
      window.Kakao.init(kakaoJsKey);
      // SDK 초기화 여부를 확인하자.
      console.log(window.Kakao.isInitialized());
    }
  }, [kakaoJsKey]);

  return (
    <Wrapper onClick={(e) => e.stopPropagation()}>
      <ModalTitle>{modalTitle}</ModalTitle>

      {showKakaoBtn ? (
        <KakaoShareButton />
      ) : (
        // <Button onClick={kakaoShare}>카카오로 공유하기</Button>
        <form>
          <Label>롤링페이퍼 링크</Label>

          <InputWrapper>
            <InputField type="text" name="paperUrl" value={shareUrl} readOnly />
            <IconButton type="button" onClick={handleClickButton}>
              <ClipboardIcon />
            </IconButton>
          </InputWrapper>

          <Button type="button" onClick={onHandleShare}>
            공유하기
            <ShareIcons>
              <ShareIcon />
            </ShareIcons>
          </Button>
        </form>
      )}
    </Wrapper>
  );
}

export default ShareModal;

const ShareIcons = styled.div`
  display: inline-block;
  padding-left: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  max-height: 300px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ModalTitle = styled.h2`
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  text-align: center;
  color: ${modalColors["MODAL_BLACK"]};
  word-break: keep-all;
`;

const Label = styled.label`
  display: inline-block;
  margin: 20px auto auto 7px;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  color: ${modalColors["MODAL_LABEL"]};
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 28px;
`;

const IconButton = styled.button`
  position: absolute;
  right: 14px;
  top: 26px;
`;

const InputField = styled.input`
  width: 263px;
  height: 44px;
  padding: 12px 48px 12px 14px;
  margin-top: 16px;
  background-color: ${modalColors["MODAL_WHITE"]};
  color: ${modalColors["MODAL_BLACK"]};
  border-radius: 20px;
  border: 1px solid ${modalColors["MODAL_POINT"]};
  font-size: 20px;
  font-weight: 400;

  &:focus {
    outline: 1px solid ${modalColors["MODAL_POINT"]};
  }

  &::-webkit-calendar-picker-indicator {
    filter: invert(52%) sepia(36%) saturate(7081%) hue-rotate(341deg) brightness(100%) contrast(89%);
  }
`;
