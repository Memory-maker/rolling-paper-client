import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 263px;
  height: 44px;
  margin-bottom: 16px; //가변 값으로 Props 설정해도 됨

  font-family: "LeeSeoyun";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.POINT_COLOR};
  background-color: ${({ theme }) => theme.colors.POINT_COLOR};
  color: ${({ theme }) => theme.colors.WHITE_COLOR};
`;

type ButtonType = "button" | "reset" | "submit";

interface ButtonProps {
  type?: ButtonType;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ type = "submit", children, onClick }: ButtonProps) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
