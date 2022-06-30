import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Editor from "../pages/Editor";
import MyPage from "../pages/MyPage";
import RollingPaper from "../pages/RollingPaper";
import Sending from "../pages/Sending";
import CreateName from "../pages/CreateName";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/rollingpaper/*" element={<RollingPaper />} />
        <Route path="/sending" element={<Sending />} />
        <Route path="/nickname" element={<CreateName />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
