import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import Modal from "../Modal";

import styled from "styled-components";
import { modalColors } from "../../theme/color";

function CreateName() {
  const navigate = useNavigate();
  const [, setIsModalOpen] = useState(true);
  const [name, setName] = useState("");

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const handleClickButton = () => {
    const data = { nickname: name };
    const url = `http://ec2-15-165-187-40.ap-northeast-2.compute.amazonaws.com:8080/paper`;

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          navigate("/mypage");
        }
      });
  };

  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      <Wrapper onClick={(e) => e.stopPropagation()}>
        <Title>내가 누구인지 알 수 있도록 닉네임을 적어볼까요?</Title>

        <form>
          <Label>닉네임</Label>
          <InputField type="text" name="name" onChange={handleNameChange} />
          <Button type="button" onClick={handleClickButton}>
            <Span>다음</Span>
          </Button>
        </form>
      </Wrapper>
    </Modal>
  );
}
export default CreateName;

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

const Button = styled.button`
  width: 263px;
  height: 44px;
  margin-top: 28px;
  font-size: 24px;
  line-height: 24px;
  background: ${modalColors["MODAL_POINT"]};
  color: ${modalColors["MODAL_WHITE"]};
  border: 1px solid ${modalColors["MODAL_POINT"]};
  border-radius: 20px;
  cursor: pointer;
`;

const Span = styled.span`
  padding: 0 15px;
`;
