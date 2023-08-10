import { Routes, Route } from "react-router-dom";

export default function ProjectDashboard() {
  return (
    <div>
      jajaja
      <Routes>
        <Route path="try-chatbot" element={<div>chatbot</div>} />
        <Route path="setup-data" element={<div>data</div>} />
        <Route path="setup-settings" element={<div>settings</div>} />
        <Route path="sharing" element={<div>sharing</div>} />
      </Routes>
    </div>
  );
}
