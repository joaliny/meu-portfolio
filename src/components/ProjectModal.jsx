import { FiX } from 'react-icons/fi';
import './ProjectModal.css';

function ProjectModal({ project, onClose }) {
    return (
        <div className="project-modal-overlay" onClick={onClose}>
            <div
                className="project-modal"
                onClick={(e) => e.stopPropagation()}
            >
                <button className="close-modal" onClick={onClose}>
                    <FiX />
                </button>

                <div className="project-modal-content">

                    {/* ESQUERDA */}
                    <div className="project-left">
                        
                        {project.video && (
                            <iframe
                                src={project.video}
                                width="100%"
                                height="320"
                                allow="autoplay"
                                allowFullScreen
                                style={{
                                    borderRadius: '12px',
                                    border: 'none'
                                }}
                            />
                        )}


                        <div className="project-buttons">
                            {project.github && (
                                <a href={project.github} target="_blank">
                                    Acessar repositório
                                </a>
                            )}
                        </div>
                    </div>

                    {/* DIREITA */}
                    <div className="project-right">
                        <h2>{project.title}</h2>

                        <span className="subtitle">
                            {project.subtitle}
                        </span>

                        {/* 🔥 SOMENTE DESCRIÇÃO */}
                        <div className="project-description">
                            {project.description.split('\n\n').map((paragraph, index) => (
                                <p key={index} className="texto">
                                    {paragraph}
                                </p>
                            ))}
                        </div>


                        <span className="date">{project.date}</span>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProjectModal;
