import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

function Header({ children }: Props) {
  return <StyledHeader>{children}</StyledHeader>;
}

export default Header;

const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  text-align: left;
  padding: 16px;
  white-space: pre-line;
  font-size: 32px;
  font-family: "LeeSeoyun";
  font-weight: 400;
  mark {
    background: none;
    color: #ffba47;
  }
`;
