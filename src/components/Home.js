import HomeHeader from "./HomeHeader";
import ProjectList from "./ProjectList";
import Footer from "./Footer"
import ExperienceList from "./ExperienceList"
import { EXPERIENCE_LIST, PROJECT_LIST } from "../constants";
import "../scss/home.scss";


const Home = () => {
    return (
        <div className="base">
            <HomeHeader />

            <div className="home-section">
                <div style={{ width: '100%' }}>
                    <h2 className="section-title" id="projects">Projects</h2>
                    <div>
                        <ProjectList list={PROJECT_LIST} />
                    </div>
                </div>
            </div>

            <div className="home-section">
                <div style={{ width: '100%' }}>
                        <h2 className="section-title" id="experiences">Experiences</h2>
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