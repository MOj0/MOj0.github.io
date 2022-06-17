import HomeHeader from "./HomeHeader";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { PROJECT_LIST } from "../constants";
import NotFound from "./NotFound";


const Project = () => {
    let { id } = useParams();
    let project = PROJECT_LIST[id];

    {
        if (project === undefined) {
            return (<NotFound/>)
        }
    }
    return (
        <div className="base">
            {/* TODO: Make it better */}
            {/* <HomeHeader /> */}

            <div className="home-section">
                <div style={{ width: '100%' }}>
                    <div>
                        <h2>{project.name}</h2>
                        {project.content()}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Project;