import { useCallback, useState } from "react";
import Main from "./Main";
import Header from "./Header";
import AddButton from "./components/AddButton";
import styled from "styled-components";
import Modal from "./Modal";

function MyPage() {
  const USER_NAME = "레몬은 아이셔";

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
      <HeaderWrapper>
        <Header>{renderHeaderInfo()}</Header>
        <Main />
        <AddButton handleClickButton={handleClickButton} />
        {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
      </HeaderWrapper>
    </MyPageLayout>
  );
}

const MyPageLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 680px;
  min-width: 380px;
  width: 100%;
  height: 100vh;
`;

const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff8eb;
`;

export default MyPage;
