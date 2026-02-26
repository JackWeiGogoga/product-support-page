import { Navigate, Route, Routes } from "react-router-dom";
import { PrivacyPage } from "@/pages/PrivacyPage";
import { SupportPage } from "@/pages/SupportPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SupportPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
