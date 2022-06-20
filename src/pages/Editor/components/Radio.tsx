import styled from "styled-components";

export const RadioButtonLabel = styled.label`
  font-size: 12px;
  color: ${(props) => props.color};
`;

export const RadioButton = styled.input.attrs((props) => ({
  type: "radio",
  value: props.value,
  name: props.name,
  onChange: props.onChange,
  checked: props.checked,
}))``;
