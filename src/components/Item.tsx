import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`;

interface Props {
  children: ReactNode;
}

function Item({ children }: Props) {
  return <StyledDiv>{children}</StyledDiv>;
}

export default Item;
