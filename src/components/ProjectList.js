import "../scss/vertical_card.scss";
import ProjectCard from "./ProjectCard"

const ProjectList = ({ list }) => {
    return (
    <div className="flex_card_list">
        {list.map((p, i) => <ProjectCard key={i} project={p} route={`/project/${i}`}></ProjectCard>)}
    </div>
    )
};


export default ProjectList;