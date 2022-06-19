import React, { ChangeEvent } from 'react';

interface FontOptionProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

const OPTION_TEXT = '이 글꼴은 어때요?';

function FontFamilyOption({ value, onChange, checked }: FontOptionProps) {
  return (
    <label style={{ fontFamily: value, fontSize: '12px', whiteSpace: 'nowrap' }}>
      <input type="radio" value={value} name="font-family" onChange={onChange} checked={checked} />
      {OPTION_TEXT}
    </label>
  );
}

export default FontFamilyOption;
