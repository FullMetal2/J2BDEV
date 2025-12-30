import HomePage from "./pages/Home/Home.tsx";
import Mention from "./pages/Mention/Mention.tsx";
import Process from "./pages/Process/Process.tsx";
import ProjectsPage from "./pages/Projects/Projects.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/process" element={<Process />} />
        <Route path="/mention" element={<Mention />} />
        <Route path="/project" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
