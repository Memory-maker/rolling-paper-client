import React, { useRef } from "react";
import ReactDOM from "react-dom";

import styled from "styled-components";

const ModalWrapper = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
`;

const ModalBody = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  position: absolute;
  width: 303px;
  z-index: 9999;
  padding: 32px 24px;
  background-color: #ffffff;
  border-radius: 20px;
  border: 1px solid #f05a39;
`;

interface ModalProps {
  setIsModalOpen: (state: boolean) => void;
  children: React.ReactNode;
}
function ModalContainer({ setIsModalOpen, children }: ModalProps) {
  const modalRoot = document.getElementById("modal") as HTMLDivElement;
  const modalRef = useRef<HTMLDivElement>(null);

  const handleModalOutsideClick = () => {
    setIsModalOpen(false);
  };

  return ReactDOM.createPortal(
    <ModalWrapper ref={modalRef} onClick={handleModalOutsideClick}>
      <ModalBody>{children}</ModalBody>
    </ModalWrapper>,
    modalRoot,
  );
}

export default ModalContainer;
