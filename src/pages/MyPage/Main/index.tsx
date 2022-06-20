import styled from "styled-components";

import { useEffect, useContext } from "react";
import PaperItem from "../components/PaperItem";
import { CreateContext } from "../../../App";

const USER_DATA = [
  {
    id: "1",
    title: "3학년 2반 친구들",
    dueDate: "2022.12.16",
  },
];

export interface RollingPaper {
  id: string;
  title: string;
  dueDate: string;
}

function Main() {
  const toggleContext = useContext(CreateContext);

  return (
    <>
      <StyledMainTitle>
        <div>롤링 페이퍼 이름</div>
        <div>오픈 날짜</div>
      </StyledMainTitle>
      {USER_DATA.map((user) => (
        <PaperItem user={user} key={user.id} />
      ))}
    </>
  );
}

export default Main;

const StyledMainTitle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "LeeSeoyun";
  font-size: 20px;
  border-top: 2px solid #222;
  border-bottom: 2px solid #222;
  width: 100%;
  height: 50px;
  user-select: none;
`;
