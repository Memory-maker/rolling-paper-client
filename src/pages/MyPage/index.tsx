import AddButton from "./components/AddButton";
import styled from "styled-components";
import Header from "./Header";
import Main from "./Main";

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

  return (
    <MyPageLayout>
      <HeaderWrapper>
        <Header>{renderHeaderInfo()}</Header>
        <Main />
        <AddButton />
      </HeaderWrapper>
    </MyPageLayout>
  );
}

const MyPageLayout = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const HeaderWrapper = styled.div`
  position: relative;
  width: 375px;
  height: 768px;
  background: #fff8eb;
`;

export default MyPage;
