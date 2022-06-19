import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MakeRoll from "../pages/MakeRoll";
import Home from "../pages/Home";
import Editor from "../pages/Editor";
import MyPage from "../pages/MyPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/create" element={<MakeRoll />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
