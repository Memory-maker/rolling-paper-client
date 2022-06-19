import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';

interface Props {
  children: ReactNode;
  // handleCancel: (state: boolean) => MouseEvent<HTMLButtonElement> | undefined;
}

const ModalWrapper = styled.div`
  width: 303px;
  height: 583px;
  padding: 32px 24px;
  background-color: #ffffff;
  border-radius: 20px;
  border: 1px solid #f05a39;
`;

function Modal({ children }: Props) {
  const modalRoot = document.getElementById('modal') as HTMLDivElement;
  return ReactDOM.createPortal(<ModalWrapper>{children}</ModalWrapper>, modalRoot);
}

export default Modal;
