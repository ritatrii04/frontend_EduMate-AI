import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChatPage from './app/chat/page';
import DashboardPage from './app/dashboard/page';
import HistoryPage from './app/history/page';
import LoginPage from './app/login/page';
import LandingPage from './app/page';
import RegisterPage from './app/register/page';
import UploadPage from './app/upload/page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
