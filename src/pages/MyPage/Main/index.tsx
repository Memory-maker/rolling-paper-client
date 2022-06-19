import styled from 'styled-components';
import { ReactComponent as ArrowDownIcon } from '/src/assets/svgs/arrow-down.svg';
import { ReactComponent as BlindIcon } from '/src/assets/svgs/blind.svg';
import { ReactComponent as LockIcon } from '/src/assets/svgs/lock.svg';

import { useState } from 'react';

const USER_DATA = [
  {
    id: 1,
    title: '3학년 2반 친구들',
    dueDate: '2022.12.16',
  },
  {
    id: 2,
    title: '구글 스프린트 9기',
    dueDate: '2022.06.27',
  },
];

interface Props {
  id: number;
  title: string;
  dueDate: string;
}

function Main() {
  const [isToggle, setIsToggle] = useState(false);

  const handleClickToggle = () => {
    setIsToggle((prevState) => !prevState);
  };

  return (
    <>
      <StyledMainTitle>
        <div>롤링 페이퍼 이름</div>
        <div>오픈 날짜</div>
      </StyledMainTitle>
      <StyledMainContent>
        <StyledMainItems>
          <StytledMainItemTitle>
            <div>{`3학년 2반 친구들`}</div>
            <div>
              <BlindIcon />
              <LockIcon />
            </div>
          </StytledMainItemTitle>
          <StyledMainItemDate>
            {`2020.12.16`}
            <ArrowDownIcon onClick={handleClickToggle} />
          </StyledMainItemDate>
        </StyledMainItems>
      </StyledMainContent>
    </>
  );
}

export default Main;

const StyledMainTitle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: 'LeeSeoyun';
  font-size: 20px;
  border-top: 2px solid var(--black-color);
  border-bottom: 2px solid var(--black-color);
  width: 100%;
  height: 50px;
`;

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
  justify-content: space-between;
  width: 340px;
  height: 78px;
  line-height: 78px;
  border-radius: 15px;
  background: var(--white-color);
  border: 1px solid var(--point-low-color);
  color: var(--white-color);
  font-family: 'LeeSeoYun';
  font-size: 16px;
`;

const StytledMainItemTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  width: 200px;
  height: 100%;
  padding: 0 12px;
  background: var(--point-low-color);
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`;

const StyledMainItemDate = styled.div`
  font-weight: 400;
  width: 140px;
  height: 100%;
  padding-left: 12px;
  background: var(--white-color);
  color: var(--black-color);
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`;
