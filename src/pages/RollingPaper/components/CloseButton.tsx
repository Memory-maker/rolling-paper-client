import React from "react";
import styled from "styled-components";


interface ButtonProps{
  handleClick:()=>void;
}
const CloseButton = ({handleClick}:ButtonProps) => {
  return (
    <div
      onClick={handleClick}
      dangerouslySetInnerHTML={{
        __html: `<svg width="48" height="47" viewBox="0 0 48 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="2.23223" y1="45.0457" x2="45.0457" y2="2.23223" stroke="#F05A39" stroke-width="5"/>
<path d="M3 2L45.8135 44.8135" stroke="#F05A39" stroke-width="5"/>
</svg>


`,
      }}
    ></div>
  );
};

export default CloseButton;

