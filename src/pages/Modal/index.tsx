import { useRef, useState } from "react";
import ReactDOM from "react-dom";

import MakeRoll from "./MakeRoll";
import ShareRoll from "./ShareRoll";

import styled from "styled-components";

const ModalWrapper = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
`;

const ModalBody = styled.div`
  /* flex-direction: column; */
  position: absolute;
  width: 303px;
  /* height: 583px; */

  padding: 32px 24px;
  margin-top: 44px;
  background-color: #ffffff;
  border-radius: 20px;
  border: 1px solid #f05a39;
`;

function Modal() {
  const modalRoot = document.getElementById("modal") as HTMLDivElement;
  const modalRef = useRef<HTMLDivElement>(null);
  const [makeRollVisible, setMakeRollVisible] = useState(true);
  const [shareRollVisible, setShareRollVisible] = useState(false);

  const handleClickButton = () => {
    setMakeRollVisible(false);
    setShareRollVisible(true);
    // fetch("백엔드쪽 서버 url", {
    //   method: "post",
    //   body: JSON.stringify({
    //     title: title,
    //     dueDate: dueDate,
    //     paperTheme: paperTheme,
    //     batch: 1,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     if (res.success) {
    //       setPaperUrl(`https://rolling-paper-client-peach.vercel.app/rollingPaper/${res.json()}`);
    //     }
    //   });
  };

  const handleModalOutsideClick = () => {
    // setIsModalOpen(false);
  };

  return ReactDOM.createPortal(
    <ModalWrapper ref={modalRef} onClick={handleModalOutsideClick}>
      {/* <ModalWrapper ref={modalRef}> */}
      <ModalBody>
        {makeRollVisible && <MakeRoll handleClickButton={handleClickButton} />}
        {shareRollVisible && <ShareRoll />}
      </ModalBody>
    </ModalWrapper>,
    modalRoot,
  );
}

export default Modal;
