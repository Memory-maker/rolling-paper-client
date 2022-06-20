import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Modal from "../Modal";

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
`;

const Label = styled.label`
  display: inline-block;
  margin: 20px auto auto 7px;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  color: #787878;
`;

const InputField = styled.input`
  width: 263px;
  height: 44px;
  padding: 12px 14px;
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

const RadioWrapper = styled.div`
  text-align: center;
  margin-top: 16px;
`;

const RadioLabel = styled.label`
  font-size: 14px;
  display: inline-block;
  color: #000000;

  & + & {
    padding-left: 35px;
  }
`;

const RadioColor = styled.div`
  width: 100px;
  height: 140px;
  border-radius: 20px;
  margin-top: 10px;
  background-color: ${(props) => props.color};
`;

const RadioInputField = styled.input`
  accent-color: #f05a39;
  margin: 1px 7px 0 0;

  & + label span {
    width: 10px;
    height: 10px;
  }

  &:checked {
    background-color: #f05a39;
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

function MakeRoll({ setIsModalOpen }: Props) {
  const navigate = useNavigate();
  const handleClickButton = useCallback(() => {
    navigate("/example");
  }, []);

  // const [title, setTitle] = useState('');
  // const [dueDate, setDueDate] = useState('');
  // const [paperTheme, setPaperTheme] = useState(0);

  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <Wrapper>
        <Title>롤링페이퍼를 만들어볼까요?</Title>

        <form>
          <Label>롤링페이퍼 이름을 적어주세요</Label>
          <InputField type="text" name="title" required />

          <Label>언제 열어보시겠어요?</Label>
          <InputField type="date" name="dueDate" required />

          <Label>테마를 선택해주세요!</Label>
          <RadioWrapper>
            <RadioLabel htmlFor="light">
              <RadioInputField type="radio" name="paperTheme" id="light" value="light" defaultChecked />
              <span>라이트 테마</span>
              <RadioColor color="#FFF8EB" />
            </RadioLabel>

            <RadioLabel htmlFor="dark">
              <RadioInputField type="radio" name="paperTheme" id="dark" value="dark" />
              <span>다크 테마</span>
              <RadioColor color="#736D62" />
            </RadioLabel>
          </RadioWrapper>

          <Button type="submit" onClick={handleClickButton}>
            완료
          </Button>
        </form>
      </Wrapper>
    </Modal>
  );
}

export default MakeRoll;
