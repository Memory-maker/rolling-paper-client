import React, { ReactNode, useRef } from "react";
import ReactDOM, { createPortal } from "react-dom";

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
  display: flex;
  flex-direction: column;
  width: 303px;
  /* height: 583px; */
  padding: 32px 24px;
  margin-top: 44px;
  background-color: #ffffff;
  border-radius: 20px;
  border: 1px solid #f05a39;
`;

interface ModalProps{
  setIsModalOpen: (state:boolean) => void;
  children: React.ReactNode;
}
function Modal({setIsModalOpen,children}:ModalProps) {
  const modalRoot = document.getElementById("modal") as HTMLDivElement;

  const handleModalOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsModalOpen(false);
  };

  return ReactDOM.createPortal(
    <ModalWrapper onClick={handleModalOutsideClick}>
      <ModalBody>{children}</ModalBody>
    </ModalWrapper>,
    modalRoot,
  );
}

export default Modal;
