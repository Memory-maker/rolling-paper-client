import styled from "styled-components";
import { useCallback } from "react";
import { ReactComponent as ShareIcon } from "/src/assets/svgs/share.svg";
import { ReactComponent as ClipboardIcon } from "/src/assets/svgs/Text-files.svg";
import { modalColors } from "../../theme/color";
import Button from "../Button";
import { APP_BASE_URL } from "../../constants/url";
import { shareContentWithWebapi } from "../../utils/share";

interface ShareModalProps {
  paperUrl: string;
  modalTitle?: string;
}

function ShareModal({ paperUrl, modalTitle = "" }: ShareModalProps) {
  // const [visible, setVisible] = useState(true);
  const shareUrl = `${APP_BASE_URL}/${paperUrl}`;

  function copyToClipboard() {
    const t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = shareUrl;
    t.select();
    document.execCommand("copy");
    document.body.removeChild(t);
  }

  // form이면 버튼 누를시 작동 default submit니까 공유하기 버튼시 공유되도록 아래처럼 변환함.
  const handleClickButton = useCallback(() => {
    copyToClipboard();
    // setVisible(false);
  }, []);

  const onHandleForm = () => {
    //공유하기 눌렀을 시 로직

    /* shareData props Exmaple
    const shareData = {
       title: `${nickname}의 롤링페이퍼`,
      text: `${nickname}와 함께 롤링페이퍼를 써볼까요?`,
      url: `${APP_BASE_URL}/rollingpaper`,
    };
  */
    shareContentWithWebapi(shareData);
  };

  return (
    <Wrapper onClick={(e) => e.stopPropagation()}>
      <ModalTitle>{modalTitle}</ModalTitle>

      <form onSubmit={onHandleForm}>
        <Label>롤링페이퍼 링크</Label>
        <InputWrapper>
          <InputField type="text" name="paperUrl" value={shareUrl} readOnly />
          <IconButton type="button" onClick={handleClickButton}>
            <ClipboardIcon />
          </IconButton>
        </InputWrapper>

        <Button type="button">
          공유하기
          <ShareIcons>
            <ShareIcon />
          </ShareIcons>
        </Button>
      </form>
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
