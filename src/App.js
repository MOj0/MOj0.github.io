import './App.css';
import { BrowserRouter } from "react-router-dom"
import HomeHeader from './components/HomeHeader';
import Footer from "./components/Footer"
import ExperienceList from "./components/ExperienceList"
import ProjectList from "./components/ProjectList"
import "../src/scss/base.scss";
import "../src/scss/home.scss";
import "../src/scss/link.scss";
import { EXPERIENCE_LIST, PROJECT_LIST } from "./constants";

function App() {
  return (
    <BrowserRouter>
      <div className="base">
        <HomeHeader />

        <div className="home-section">
          <div style={{ width: '100%' }}>
            <a className="link" href="/#projects">
              <h2 id="projects">Projects</h2>
            </a>
            <div>
              <ProjectList list={PROJECT_LIST} />
            </div>
          </div>
        </div>

        <div className="home-section">
          <div style={{ width: '100%' }}>
            <a className="link" href="/#experiences">
              <h2 id="experiences">Experiences</h2>
            </a>
            <div>
              <ExperienceList list={EXPERIENCE_LIST} />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
