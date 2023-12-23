import './projects.css'; 
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
 
const ProjectCard = ({ title, description, technologies, liveLink, githubLink, imagesSrc }) => {
    return (
        <div className="project-card">
            <div className="project-links">
                <a href={liveLink} target="_blank" rel="noopener noreferrer">
                    Live <i className="bi bi-box-arrow-up-right"></i>
                </a>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    Code <i className="bi bi-github"></i>
                </a>
            </div>
            <hr /> 
            <div className="project-img">
                <Carousel
                    autoPlay
                    infiniteLoop
                    interval={2500}
                    showThumbs={false}
                    showStatus={false}
                    showArrows={false}
                >
                    {imagesSrc.map((imgSrc, index) => (
                        <div key={index}>
                            <img src={imgSrc} alt={`Image ${index + 1}`} />
                        </div>
                    ))}
                </Carousel>
            </div>
            <hr />
            <div className="project-details">
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="technologies">
                    {technologies.map((tech, index) => (
                        <span key={index} className="tech-box">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
