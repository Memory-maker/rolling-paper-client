import React, { ChangeEvent } from "react";

interface FontOptionProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

function BackgroundColorOption({ value, onChange, checked }: FontOptionProps) {
  return (
    <label style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <input
        type="radio"
        value={value}
        name="background-color"
        onChange={onChange}
        checked={checked}
        style={{ marginBottom: "10px" }}
      />
      <span style={{ borderRadius: "50%", width: "36px", height: "36px", backgroundColor: value }} />
    </label>
  );
}

export default BackgroundColorOption;
