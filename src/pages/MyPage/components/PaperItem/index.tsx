import { ReactComponent as ArrowDownIcon } from "/src/assets/svgs/arrow-down.svg";
import { ReactComponent as LockIcon } from "/src/assets/svgs/lock.svg";

import styled from "styled-components";
import DropDown from "../DropDown";
import { RollingPaper } from "../../Main/index";
import { useCallback, useState } from "react";

interface PaperItemProps {
  user: RollingPaper;
}

function PaperItem({ user }: PaperItemProps) {
  const [isLock, setIsLock] = useState(false);
  const [isToggle, setIsToggle] = useState(false);

  const handleClickToggle = useCallback(() => {
    setIsToggle((prevState) => !prevState);
  }, []);

  return (
    <>
      <StyledMainContent>
        <StyledMainItems>
          <StytledMainItemTitle>
            <div>{user.title}</div>
            <div>{!isLock && <LockIcon />}</div>
          </StytledMainItemTitle>
          <StyledMainItemDate>
            <div>{user.dueDate}</div>
            <ArrowDownIcon onClick={handleClickToggle} />
          </StyledMainItemDate>
        </StyledMainItems>
      </StyledMainContent>
      {isToggle && <DropDown />}
    </>
  );
}

export default PaperItem;

const StyledMainContent = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: fit-content;
`;

const StyledMainItems = styled.div`
  display: flex;
  width: 340px;
  height: 78px;
  line-height: 78px;
  border-radius: 15px;
  background: #fff;
  border: 1px solid #f05a39cc;
  color: #fff;
  font-family: "LeeSeoYun";
  font-size: 16px;
  user-select: none;
  overflow: hidden;
`;

const StytledMainItemTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  width: 200px;
  height: 100%;
  padding: 0 12px;
  background: #f05a39cc;
`;

const StyledMainItemDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: 400;
  width: 140px;
  height: 100%;
  padding-left: 12px;
  background: #fff;
  color: #222;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;

  svg {
    cursor: pointer;
  }
`;
