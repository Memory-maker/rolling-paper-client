import React from "react";

interface ButtonProps {
  setShow: () => void;
  stickerModalShow: boolean;
}

const StickerButton = ({ setShow, stickerModalShow }: ButtonProps) => {
  return !stickerModalShow ? (
    <div
      onClick={setShow}
      dangerouslySetInnerHTML={{
        __html: `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="60" height="60" rx="30" fill="#F05A39"/>
<path d="M28.0979 17.8541C28.6966 16.0115 31.3034 16.0115 31.9021 17.8541L34.0413 24.4377C34.309 25.2617 35.0769 25.8197 35.9434 25.8197H42.8658C44.8032 25.8197 45.6088 28.2989 44.0413 29.4377L38.441 33.5066C37.74 34.0159 37.4467 34.9186 37.7145 35.7426L39.8536 42.3262C40.4523 44.1689 38.3433 45.7011 36.7759 44.5623L31.1756 40.4934C30.4746 39.9841 29.5254 39.9841 28.8244 40.4934L23.2241 44.5623C21.6567 45.7011 19.5477 44.1689 20.1464 42.3262L22.2855 35.7426C22.5533 34.9186 22.26 34.0159 21.559 33.5066L15.9587 29.4377C14.3912 28.2989 15.1968 25.8197 17.1342 25.8197H24.0566C24.9231 25.8197 25.691 25.2617 25.9587 24.4377L28.0979 17.8541Z" fill="white"/>
</svg>
`,
      }}
    />
  ) : (
    <div
      onClick={setShow}
      dangerouslySetInnerHTML={{
        __html: `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="60" rx="30" fill="#F05A39"/>
        <path d="M17 28.5L27.8372 39.5924L42.5 21.8888" stroke="white" stroke-width="5"/>
        </svg>        
`,
      }}
    />
  );
};

export default StickerButton;
