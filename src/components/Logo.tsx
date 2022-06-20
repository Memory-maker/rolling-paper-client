import styled from "styled-components";
import { colors } from "../theme/color";
import { ReactComponent as PaperAirPlaneIcon } from "/src/assets/svgs/paper-airplane.svg";

const Icon = styled(PaperAirPlaneIcon)``;

const ShortLine = styled.div`
  width: 20px;
  height: 3px;
  background-color: ${colors.SUBPOINT_COLOR};
`;

const LongLine = styled.div`
  width: 28px;
  height: 3px;
  background-color: ${colors.SUBPOINT_COLOR};
  margin: 0 4px;
`;

const LeftLines = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  height: 24px;
`;

const RightLines = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = () => {
  return (
    <Wrapper>
      <LeftLines>
        <ShortLine />
        <LongLine />
        <ShortLine />
      </LeftLines>
      <Icon />
      <RightLines>
        <ShortLine />
        <LongLine />
        <ShortLine />
      </RightLines>
    </Wrapper>
  )
};

export default Logo;
