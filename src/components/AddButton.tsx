import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100px;
  background-color: red;
`;

interface Props {
  children: ReactNode;
}

function AddButton({ children }: Props) {
  return <StyledButton type="button">{children}</StyledButton>;
}

export default AddButton;
