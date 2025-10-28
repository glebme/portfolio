import './Projects.css';

const Projects = () => {
    return (
        <div className="projects">
            <h2 className="projects__heading content__heading">Projects</h2>
            <div className="projects__list">
                <div className="project-card">
                    <h3 className="project-card__title">Project One</h3>
                    <p className="project-card__desc">A short summary of project one — tech used, problem solved and impact.</p>
                    <a className="project-card__link" href="#">View project</a>
                </div>

                <div className="project-card">
                    <h3 className="project-card__title">Project Two</h3>
                    <p className="project-card__desc">Brief description of project two with a focus on architecture and learnings.</p>
                    <a className="project-card__link" href="#">View project</a>
                </div>

                <div className="project-card">
                    <h3 className="project-card__title">Project Three</h3>
                    <p className="project-card__desc">Summary of project three. Replace these placeholders with real projects.</p>
                    <a className="project-card__link" href="#">View project</a>
                </div>
            </div>
        </div>
    );
}

export default Projects;

