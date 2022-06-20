import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as ShareIcon } from "/src/assets/svgs/share.svg";
import { ReactComponent as ClipboardIcon } from "/src/assets/svgs/Text-files.svg";
import styled from "styled-components";

interface Props {
  setIsModalOpen: (state: boolean) => void;
}

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

const IconWrapper = styled.div`
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

function ShareRoll() {
  const [visible, setVisible] = useState(true);
  const handleClickButton = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <Wrapper>
      <Title>롤링 페이퍼를 만들었어요! 이제 친구들에게 써달라고 말해볼까요?</Title>

      <form>
        <Label>롤링페이퍼 링크</Label>
        <InputWrapper>
          <InputField type="text" name="paperUrl" value="https://rolling-paper-client-blue.vercel.app/" />
          <IconWrapper>
            <ClipboardIcon />
          </IconWrapper>
        </InputWrapper>
        {/* 
        <Button type="button" onClick={handleClickButton}>
          <Span>닫기</Span>
          <ShareIcon />
        </Button> */}
      </form>
    </Wrapper>
  );
}

export default ShareRoll;
