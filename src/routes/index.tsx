import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Editor from "../pages/Editor";
import MyPage from '../pages/MyPage';
import RollingPaper from "../pages/RollingPaper";
import Main from "../pages/MyPage/Main";
import Sending from "../pages/Sending";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/" element={<Main/>} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/rollingpaper/*" element={<RollingPaper />} />
        <Route path="/Sending" element={<Sending />} />
      </Routes>
    </BrowserRouter>
  );
}
 
export default Router;
