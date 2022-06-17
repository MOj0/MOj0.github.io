import HomeHeader from "./HomeHeader";
import ProjectList from "./ProjectList";
import Footer from "./Footer"
import ExperienceList from "./ExperienceList"
import { EXPERIENCE_LIST, PROJECT_LIST } from "../constants";


const Home = () => { 
    return (
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
    )
}

export default Home;