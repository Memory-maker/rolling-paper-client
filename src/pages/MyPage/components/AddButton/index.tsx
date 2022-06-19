import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as PaperAirPlaneIcon } from '/src/assets/svgs/paper-airplane.svg';

function AddButton() {
  const navigate = useNavigate();
  const handleClickButton = useCallback(() => {
    navigate('/');
  }, []);
  return (
    <StyledButton type="button" onClick={handleClickButton}>
      {<StyledIcon />}
    </StyledButton>
  );
}

export default AddButton;

const StyledButton = styled.button`
  position: absolute;
  bottom: 24px;
  right: 24px;
  width: 40px;
  height: 40px;
  background: var(--point-color);
  color: #222;
  border-radius: 50%;
  border: 1px solid var(--point-color);
  padding-left: 3px;
  margin: auto;
  cursor: pointer;

  :focus {
    outline: none;
  }
`;

const StyledIcon = styled(PaperAirPlaneIcon)`
  width: 32px;
  height: 32px;
  path,
  line {
    stroke-width: 2px;
    stroke: var(--white-color);
  }
`;
