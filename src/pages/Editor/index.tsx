import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Button from "./components/Button";
import Card from "./components/Card";
import FontFamilyOption from "./components/FontFamilyOption";
import FontColorOption from "./components/FontColorOption";
import BackgroundColorOption from "./components/BackgroundColorOption";
import ShareButton from "../../components/ShareButton";
import { useNavigate } from "react-router-dom";

const EditorWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 680px;
  min-width: 380px;
  width: 100%;
  height: 100vh;
  padding: 20px;
  box-sizing:border-box;
  background-color: #fff8eb;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 18px;
  cursor: pointer;
`;

const MakerWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 300px;
`;

const EditorTypeSelector = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0px 80px;
  background-color: rgba(0, 0, 0, 0.3);
  color: #ffffff;
  font-size: 32px;
`;

const EditorTypeOption = styled.div.attrs((props) => ({
  onClick: props.onClick,
}))`
  flex: 1;
  color: ${(props) => props.color};
  text-align: center;
`;

const EditorContent = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  height: 240px;
`;

const BackgroundEditorWrapper = styled.div`
  display: grid;
  height: 100%;
  padding: 30px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const TextEditorWrapper = styled.div`
  height: 100%;
`;

const TextEditor = styled.div`
  height: 50%;
  padding: 20px 16px;
`;

const TextEditorTitle = styled.div`
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 12px;
  margin-left: 8px;
`;

const TextEditorSelector = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const BACK_GROUND_COLOR_OPTIOS = Object.freeze(["#ffd3d3", "#d3eaff", "#def9c4", "#efccff", "#fff5bf", "#ffffff"]);
const FONT_FAMILY_OPTIONS = Object.freeze([
  "LeeSeoyun",
  "PyeongChangPeace-Light",
  "NanumGothic",
  "JejuMyeongjo",
  "EarlyFontDiary",
  "ParkYongJun",
]);
const FONT_COLOR_OPTIONS = Object.freeze(["#000000", "#ff0000", "#0085ff", "#7dff00", "#ad00ff", "#ffd600"]);

function Editor() {
  const navigate = useNavigate();

  const cardRef = useRef<HTMLTextAreaElement>(null);
  const [editorType, setEditorType] = useState("background");

  const [textValue, setTextValue] = useState("");
  const [backgroundColor, setBackgroundColor] = useState(BACK_GROUND_COLOR_OPTIOS[0]);
  const [fontFamily, setFontFamily] = useState(FONT_FAMILY_OPTIONS[0]);
  const [fontColor, setFontColor] = useState(FONT_COLOR_OPTIONS[0]);

  useEffect(() => {
    if (cardRef?.current) {
      cardRef.current.focus();
    }
  }, [cardRef]);

  const handleChangeText = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setTextValue(event.target.value);
  }, []);

  const handleChangeBackGroundColor = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setBackgroundColor(event.target.value);
  }, []);

  const handleChangeFontFamily = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setFontFamily(event.target.value);
  }, []);

  const handleChangeFontColor = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setFontColor(event.target.value);
  }, []);

  return (
    <EditorWrapper>
      <ButtonWrapper>
        <ShareButton />
        <Button onClick={() => navigate("/sending")}>완료</Button>
      </ButtonWrapper>
      <Card
        backgroundColor={backgroundColor}
        fontFamily={fontFamily}
        color={fontColor}
        value={textValue}
        onChange={handleChangeText}
        ref={cardRef}
      />
      <MakerWrapper>
        <EditorTypeSelector>
          <EditorTypeOption
            color={editorType === "background" ? "#ffd600" : "inherit"}
            onClick={() => setEditorType("background")}
          >
            배경
          </EditorTypeOption>
          <EditorTypeOption color={editorType === "text" ? "#ffd600" : "inherit"} onClick={() => setEditorType("text")}>
            텍스트
          </EditorTypeOption>
        </EditorTypeSelector>

        <EditorContent>
          {editorType === "background" && (
            <BackgroundEditorWrapper>
              {BACK_GROUND_COLOR_OPTIOS.map((value) => (
                <BackgroundColorOption
                  key={value}
                  value={value}
                  onChange={handleChangeBackGroundColor}
                  checked={value === backgroundColor}
                />
              ))}
            </BackgroundEditorWrapper>
          )}
          {editorType === "text" && (
            <TextEditorWrapper>
              <TextEditor>
                <TextEditorTitle>글꼴</TextEditorTitle>
                <TextEditorSelector>
                  {FONT_FAMILY_OPTIONS.map((value) => (
                    <FontFamilyOption
                      key={value}
                      value={value}
                      onChange={handleChangeFontFamily}
                      checked={value === fontFamily}
                    />
                  ))}
                </TextEditorSelector>
              </TextEditor>
              <TextEditor>
                <TextEditorTitle>글자 색</TextEditorTitle>
                <TextEditorSelector>
                  {FONT_COLOR_OPTIONS.map((value) => (
                    <FontColorOption
                      key={value}
                      value={value}
                      onChange={handleChangeFontColor}
                      checked={value === fontColor}
                    />
                  ))}
                </TextEditorSelector>
              </TextEditor>
            </TextEditorWrapper>
          )}
        </EditorContent>
      </MakerWrapper>
    </EditorWrapper>
  );
}

export default Editor;
