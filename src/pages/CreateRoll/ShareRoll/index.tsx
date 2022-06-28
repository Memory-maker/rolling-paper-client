import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import Modal from "../../Modal";

import { ReactComponent as ShareIcon } from "/src/assets/svgs/share.svg";
import { ReactComponent as ClipboardIcon } from "/src/assets/svgs/Text-files.svg";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  max-width: 100%;
  max-height: 300px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  word-break: keep-all;
`;

const Label = styled.label`
  display: inline-block;
  margin: 20px auto auto 7px;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  color: #787878;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const IconButton = styled.button`
  position: absolute;
  right: 14px;
  top: 26px;
  cursor: pointer;
`;

const InputField = styled.input`
  width: 263px;
  height: 44px;
  padding: 12px 48px 12px 14px;
  margin-top: 16px;
  background-color: #ffffff;
  color: #000000;
  border-radius: 20px;
  border: 1px solid #f05a39;
  font-size: 20px;
  font-weight: 400;

  &:focus {
    outline: 1px solid #f05a39;
  }

  &::-webkit-calendar-picker-indicator {
    filter: invert(52%) sepia(36%) saturate(7081%) hue-rotate(341deg) brightness(100%) contrast(89%);
  }
`;

const Button = styled.button`
  width: 263px;
  height: 44px;
  margin-top: 28px;
  font-size: 24px;
  line-height: 24px;
  background: #f05a39;
  color: #ffffff;
  border: 1px solid #f05a39;
  border-radius: 20px;
  cursor: pointer;
`;

const Span = styled.span`
  padding: 0 15px;
`;

interface Props {
  paperUrl: string;
}

function ShareRoll({ paperUrl }: Props) {
  const [visible, setVisible] = useState(true);
  const shareUrl = `https://rolling-paper-client-blue.vercel.app/rollingpaper/11${paperUrl}`;

  const shareData = {
    title: "롤링 페이퍼",
    text: "롤링 페이퍼",
    url: shareUrl,
  };

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
    setVisible(false);
  }, []);

  return (
    <Wrapper onClick={(e) => e.stopPropagation()}>
      <Title>롤링 페이퍼를 만들었어요! 이제 친구들에게 써달라고 말해볼까요?</Title>

      <form>
        <Label>롤링페이퍼 링크</Label>
        <InputWrapper>
          <InputField type="text" name="paperUrl" value={shareUrl} readOnly />
          <IconButton type="button" onClick={handleClickButton}>
            <ClipboardIcon />
          </IconButton>
        </InputWrapper>

        <Button type="button" onClick={handleClickButton}>
          <Span>공유하기</Span>
          <ShareIcon />
        </Button>
      </form>
    </Wrapper>
  );
}

export default ShareRoll;
