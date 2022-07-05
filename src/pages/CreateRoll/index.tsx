import { useState } from "react";

import Modal from "../ModalContainer";
import MakeRoll from "./MakeRoll";
import ShareRoll from "../../components/shared/shareModal";

type ObjType = {
  [index: string]: string;
  paperTitle: string;
  dueDt: string;
  theme: string;
};

interface Props {
  setIsModalOpen: (state: boolean) => void;
}

function CreateRoll({ setIsModalOpen }: Props) {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [shareRollVisible, setShareRollVisible] = useState(false);

  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [paperTheme, setPaperTheme] = useState("light");
  const [paperUrl, setPaperUrl] = useState("");

  const handleClickButton = () => {
    const params: ObjType = {
      paperTitle: title,
      dueDt: dueDate + " 00:00:00",
      theme: paperTheme,
    };

    const query = Object.keys(params)
      .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
      .join("&");

    const url = `http://ec2-15-165-187-40.ap-northeast-2.compute.amazonaws.com:8080/paper?${query}`;

    console.log("url", url);

    fetch(url, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.success) {
          setPaperUrl(`https://rolling-paper-client-peach.vercel.app/rollingPaper/${res.json()}`);
          console.log("paperUrl", paperUrl);
        }
        setShareRollVisible(true); // 추후 success 내부로 이동, 실패시 toast popup
      });
  };

  const modalTitle = "롤링 페이퍼를 만들었어요! 이제 친구들에게 써달라고 말해볼까요?";

  return (
    <Modal setIsModalOpen={setIsModalOpen}>
      {!shareRollVisible && (
        <MakeRoll
          handleClickButton={handleClickButton}
          setTitle={setTitle}
          setDueDate={setDueDate}
          setPaperTheme={setPaperTheme}
        />
      )}
      {shareRollVisible && <ShareRoll paperUrl={paperUrl} modalTitle={modalTitle} />}
    </Modal>
  );
}

export default CreateRoll;
