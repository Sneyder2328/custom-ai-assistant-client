import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const ProjectDashboard = lazy(
  () => import("./pages/ProjectDashboard/index.jsx")
);
const SignUp = lazy(() => import("./pages/SignUp/index.js"));
const Login = lazy(() => import("./pages/Login/index.jsx"));

function App() {
  return (
    <main>
      <Suspense fallback={<div />}>
        <BrowserRouter>
          <Routes>
            <Route
              path="projects/:projectId/*"
              element={<ProjectDashboard />}
            />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </main>
  );
}

export default App;
