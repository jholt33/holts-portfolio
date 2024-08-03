import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Projects from "./pages/Projects";
import SingleProject from "./pages/SingleProject";
import SingleProjectLayout from "./pages/SingleProjectLayout";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router basename="/holts-portfolio">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="projects" element={<SingleProjectLayout />}>
            <Route index element={<Projects />} />
            <Route path=":projectId" element={<SingleProject />} />
          </Route>

          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
