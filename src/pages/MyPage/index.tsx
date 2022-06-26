import { useCallback, useState } from "react";
import Main from "./Main";
import Header from "./Header";
import AddButton from "./components/AddButton";
import styled from "styled-components";
<<<<<<< HEAD
import Modal from "./Modal";
=======
import Header from "./Header";
import Main from "./Main";
import { useState } from "react";
import MakeRoll from "../MakeRoll";
>>>>>>> 2e34389092e22d4f1c5883be475e31b4c2471559

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
<<<<<<< HEAD
      <HeaderWrapper>
        <Header>{renderHeaderInfo()}</Header>
        <Main />
        <AddButton handleClickButton={handleClickButton} />
        {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
      </HeaderWrapper>
=======
      <Header>{renderHeaderInfo()}</Header>
      <Main />
      <AddButton setIsModalOpen={() => setIsOpen(true)} />
      {isOpen && <MakeRoll setIsModalOpen={setIsOpen} />}
>>>>>>> 2e34389092e22d4f1c5883be475e31b4c2471559
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
