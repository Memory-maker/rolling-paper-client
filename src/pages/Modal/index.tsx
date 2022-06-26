<<<<<<< HEAD
import { useRef, useState } from "react";
import ReactDOM from "react-dom";
=======
import React, { ReactNode, useRef } from "react";
import ReactDOM, { createPortal } from "react-dom";
>>>>>>> 2e34389092e22d4f1c5883be475e31b4c2471559

import MakeRoll from "./MakeRoll";
import ShareRoll from "./ShareRoll";

import styled from "styled-components";

const ModalWrapper = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
`;

const ModalBody = styled.div`
<<<<<<< HEAD
  /* flex-direction: column; */
  position: absolute;
=======
  display: flex;
  flex-direction: column;
>>>>>>> 2e34389092e22d4f1c5883be475e31b4c2471559
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
<<<<<<< HEAD
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
=======

  const handleModalOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsModalOpen(false);
  };

  return ReactDOM.createPortal(
    <ModalWrapper onClick={handleModalOutsideClick}>
      <ModalBody>{children}</ModalBody>
>>>>>>> 2e34389092e22d4f1c5883be475e31b4c2471559
    </ModalWrapper>,
    modalRoot,
  );
}

export default Modal;
