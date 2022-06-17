import "../scss/project.scss";
import "../scss/tag.scss";
import { useState, useEffect } from 'react';

const ProjectHeader = ({ project }) => {
    const [projectStats, setProjectStats] = useState(null);

    const key = `${project.owner}/${project.repo_name}`;
    const api_link = `https://api.github.com/repos/${key}`;
    useEffect(() => {
        const getProjectStats = async () => {
            const response = await fetch(api_link);
            const data = await response.json();
            setProjectStats(data);
        }
        getProjectStats();
    }, [])

    return projectStats == null ? <span>Loading Github stats...</span> : <div>
        <a
            href={project.url}
            rel="noopener noreferrer"
            target="_blank">
            <h2 id={project.name}>{project.name}</h2>
        </a>
        <br />
        <h6>{project.description}{project.technologies.length > 0 ? "," : ""} {project.technologies.join(", ")}</h6>
        <div className="project-github">
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
                <a
                    className="project-github-link"
                    target="_blank"
                    href={project.url} rel="noopener noreferrer">
                    <i style={{ marginRight: "1rem", fontSize: "2.2rem" }} className="fab fa-github project-github-link" />
                </a>
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
                <div style={{ fontSize: "1.8rem" }} className="project-github-icon">
                    <i className="fas fa-star" />
                </div>
                <div style={{ marginRight: "0.5rem" }}>
                    {projectStats.stargazers_count}
                </div>

                <div style={{ fontSize: "1.8rem" }} className="project-github-icon">
                    <i className="fas fa-code-branch" />
                </div>
                <div style={{ marginRight: "0.5rem" }}>
                    {projectStats.forks_count}
                </div>
            </div>
        </div>
        <div className="tag-list-container">
            <ul>
                {project.tags.map((tag, i) => <li key={i}>{tag}</li>)}
            </ul>
        </div>
        <a
            href={project.url}
            rel="noopener noreferrer"
            target="_blank">
            <img className="project-image"
                alt={project.name}
                src={project.preview_thumbnail_url} />
        </a>
        <br />
    </div>
}


export default ProjectHeader;
