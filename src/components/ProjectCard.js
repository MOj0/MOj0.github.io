import "../scss/vertical_card.scss"

const ProjectCard = ({ project, route }) => {
    return (
        <div className="flex_card">
            <a href={route}>
                <div className="flex_card_img_container">
                    <div className="flex_card_img">
                        <img alt={project.name} src={project.preview_url} />
                    </div>
                </div>
                <div className="flex_card_info">
                    <h4>{project.name}</h4>
                    <h6>{project.technologies.join(", ")}</h6>
                    <p>{project.description}</p>
                </div>
            </a>
        </div>
    )
}


export default ProjectCard;