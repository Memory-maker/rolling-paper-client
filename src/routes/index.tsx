import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from '../pages/Main';
import ExamplePage from '../pages/ExamplePage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/example" element={<ExamplePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
