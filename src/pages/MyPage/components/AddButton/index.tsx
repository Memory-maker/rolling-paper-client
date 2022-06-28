import { ReactComponent as PaperAirPlaneIcon } from "/src/assets/svgs/paper-airplane.svg";
import styled from "styled-components";
import { useCallback, useState } from "react";
import { colors } from "../../../../theme/color";

interface ButtonProps {
  setIsModalOpen: () => void;
}
function AddButton({ setIsModalOpen }: ButtonProps) {
  return (
    <StyledButton type="button" onClick={setIsModalOpen}>
      {<StyledIcon />}
    </StyledButton>
  );
}

export default AddButton;

const StyledButton = styled.button`
  position: absolute;
  bottom: 24px;
  right: 24px;
  width: 60px;
  height: 60px;
  background: #f05a39;
  color: #222;
  border-radius: 50%;
  border: 1px solid #f05a39;
  padding-left: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  :focus {
    outline: none;
  }
`;

const StyledIcon = styled(PaperAirPlaneIcon)`
  padding-bottom: 5px;
  path,
  line {
    stroke-width: 2px;
    stroke: #fff;
  }
  &:hover {
    line,
    path {
      stroke: ${colors.SUB_POINT_COLOR};
    }
  }
`;
