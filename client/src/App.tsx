import ProjectsPage from "./pages/Projects";
import HomePage from "./pages/Home.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="mx-auto  max-w-6xl  px-6">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
