import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from '../pages/Main';
import MyPage from '../pages/MyPage';
import RollingPaper from "../pages/RollingPaper";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/rollingpaper/*" element={<RollingPaper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
