import { ChangeEvent } from "react";
import styled from "styled-components";

interface CardProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  backgroundColor: string;
  fontFamily: string;
  color: string;
}

const Card = styled.textarea.attrs((props: CardProps, ref: HTMLTextAreaElement) => ({
  value: props.value,
  onChange: props.onChange,
  maxLength: 50,
  ref,
}))`
  background-color: ${(props) => props.backgroundColor};
  font-family: ${(props) => props.fontFamily};
  color: ${(props) => props.color};
  font-weight: 300;
  padding: 66px 30px;
  border: none;
  outline: none;
  border-radius: 20px;

  font-size: 32px;
  height: 420px;
  line-height: 40.96px;
`;

export default Card;
