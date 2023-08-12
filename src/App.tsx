import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const ProjectDashboard = lazy(
  () => import("./pages/ProjectDashboard/index.jsx")
);
const SignUp = lazy(() => import("./pages/SignUp/index.js"));
const Login = lazy(() => import("./pages/Login/index.jsx"));

const queryClient = new QueryClient();

function App() {
  return (
    <main>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </main>
  );
}

export default App;
