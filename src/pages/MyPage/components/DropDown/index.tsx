import { useCallback, useState } from "react";
import styled from "styled-components";

function DropDown() {
  const [isToggle, setIsToggle] = useState(false);

  const handleClickShare = useCallback(() => {
    confirm("공유하기를 진행하시겠습니까?");
  }, []);

  const handleClickDelete = useCallback(() => {
    const value = confirm("삭제하기를 진행하시겠습니까?");
  }, []);

  const handleClickLock = useCallback(() => {
    setIsToggle((prevState) => !prevState);
  }, []);

  return (
    <StyledDropDownWrap>
      <button type="button" onClick={handleClickShare}>
        공유하기
      </button>
      <button type="button" onClick={handleClickDelete}>
        삭제하기
      </button>
      <button type="button" onClick={handleClickLock}>
        {isToggle ? "모두 보기" : "나만 보기"}
      </button>
    </StyledDropDownWrap>
  );
}

export default DropDown;

const StyledDropDownWrap = styled.div`
  position: absolute;
  right: 18px;
  top: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 140px;
  height: 100px;
  background: #fff;
  border-radius: 15px;
  border: 1px solid #f05a39cc;
  text-align: center;
  user-select: none;
  box-shadow: 1px 2px 4px #aaa;

  button:not(:last-child) {
    border-bottom: 1px solid #f05a39cc;
    padding-bottom: 6px;
  }

  button {
    background: transparent;
    color: #222;
    font-family: "LeeSeoyun";
    cursor: pointer;
  }

  button:hover {
    font-weight: 600;
  }
`;
