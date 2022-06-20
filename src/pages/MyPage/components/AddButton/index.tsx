import { useCallback, useState, MouseEvent } from "react";

import { ReactComponent as PaperAirPlaneIcon } from "/src/assets/svgs/paper-airplane.svg";
import styled from "styled-components";

interface Props {
  handleClickButton: (e: MouseEvent<HTMLButtonElement>) => void;
}

function AddButton({ handleClickButton }: Props) {
  return (
    <StyledButton type="button" onClick={handleClickButton}>
      {<StyledIcon />}
    </StyledButton>
  );
}

export default AddButton;

const StyledButton = styled.button`
  position: absolute;
  bottom: 24px;
  right: 24px;
  width: 40px;
  height: 40px;
  background: #f05a39;
  color: #222;
  border-radius: 50%;
  border: 1px solid #f05a39;
  padding-left: 3px;
  margin: auto;
  cursor: pointer;

  :focus {
    outline: none;
  }
`;

const StyledIcon = styled(PaperAirPlaneIcon)`
  width: 32px;
  height: 32px;
  path,
  line {
    stroke-width: 2px;
    stroke: #fff;
  }
`;
