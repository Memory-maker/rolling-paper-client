import React from "react";
import styled from "styled-components";


interface ButtonProps{
  handleClick:()=>void;
}
const LeftButton = ({handleClick}:ButtonProps) => {
  return (
    <div
      onClick={handleClick}
      dangerouslySetInnerHTML={{
        __html: `<svg width="28" height="49" viewBox="0 0 28 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26 2L4 24.5L26 47" stroke="#F05A39" stroke-width="5"/>
</svg>


`,
      }}
    ></div>
  );
};

export default LeftButton;
