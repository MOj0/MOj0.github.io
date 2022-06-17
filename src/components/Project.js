import { useParams } from "react-router-dom";
import { PROJECT_LIST } from "../constants";
import NotFound from "./NotFound";
import PageTemplate from "./PageTemplate";
import "../scss/article.scss";
import ProjectHeader from "./ProjectHeader";
import Footer from "./Footer";
import Header from "./Header";


const Project = () => {
    let { id } = useParams();
    let project = PROJECT_LIST[id];

    if (project === undefined) {
        return (<NotFound />)
    }
    return (
        <div className="base">
            <Header/>
            <div className="article">
                <div className="article-content">
                    <ProjectHeader project={project}/>
                    {project.content()}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Project;