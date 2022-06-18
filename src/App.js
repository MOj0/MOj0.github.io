import './App.css';
import { Routes, Route, HashRouter } from "react-router-dom"
import "../src/scss/base.scss";
import "../src/scss/home.scss";
import "../src/scss/link.scss";
import Home from "./components/Home"
import Project from './components/Project';
import NotFound from './components/NotFound';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
