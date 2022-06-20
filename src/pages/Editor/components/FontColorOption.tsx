import React, { ChangeEvent } from "react";
import { RadioButton, RadioButtonLabel } from "./Radio";

interface FontOptionProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

const OPTION_TEXT = "이 색은 어때요?";

function FontColorOption({ value, onChange, checked }: FontOptionProps) {
  return (
    // <label style={{ color: value, fontSize: '12px' }}>
    <RadioButtonLabel color={value}>
      <RadioButton value={value} name="font-color" onChange={onChange} checked={checked} />
      {/* <input type="radio" value={value} name="font-color" onChange={onChange} checked={checked} /> */}
      {OPTION_TEXT}
    </RadioButtonLabel>
    // </label>
  );
}

export default FontColorOption;
