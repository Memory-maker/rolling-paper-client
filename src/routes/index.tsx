import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MakeRoll from '../pages/MakeRoll';
import Home from "../pages/Home";
import Editor from '../pages/Editor';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/create" element={<MakeRoll />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
