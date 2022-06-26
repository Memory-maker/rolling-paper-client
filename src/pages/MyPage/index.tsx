import { useCallback, useState } from "react";
import AddButton from "./components/AddButton";
import styled from "styled-components";
import Header from "./Header";
import Main from "./Main";
import MakeRoll from "../Modal/MakeRoll";

function MyPage() {
  const USER_NAME = "레몬은 아이셔";
  const [isOpen, setIsOpen] = useState(false);

  const renderHeaderInfo = () => {
    return (
      <>
        <mark>{USER_NAME}</mark>
        {" 님의 \n 롤링페이퍼 저장소"}
      </>
    );
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickButton = useCallback(() => {
    setIsModalOpen((prevState) => !prevState);
  }, [isModalOpen]);

  return (
    <MyPageLayout>
      <Header>{renderHeaderInfo()}</Header>
      <Main />
      <AddButton setIsModalOpen={() => setIsOpen(true)} />
      {isOpen && <MakeRoll setIsModalOpen={setIsOpen} />}
    </MyPageLayout>
  );
}

const MyPageLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 480px;
  min-width: 380px;
  width: 100%;
  height: 100vh;
  position: relative;
  background: #fff8eb;
`;

export default MyPage;
