import { useState, useRef, useEffect } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import ProjectModal from './ProjectModal';
import './Projects.css';
import fotoAgendai from '../assets/icons/foto_agendai.png';
import adoteMe from '../assets/icons/adote-me.png';
import blogRS from '../assets/icons/blogRS.png';
import sitegrama from '../assets/icons/sitegrama.png';




import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaPhp,
    FaPython,
} from 'react-icons/fa';

import {
    SiLaravel,
    SiFlask,
    SiMysql,
    SiGoogle,
} from 'react-icons/si';

export const techIcons = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
    JS: <FaJs />,
    JavaScript: <FaJs />,

    PHP: <FaPhp />,
    Laravel: <SiLaravel />,

    Python: <FaPython />,
    Flask: <SiFlask />,
    MySQL: <SiMysql />,

    'Google Gemini AI': <SiGoogle />,
};


const projects = [
    {
        id: 1,
        title: 'Agendaí',
        subtitle: 'Sistema Web de Agendamento de Salas com Controle de Reservas 📅',
        techs: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel'],
        image: fotoAgendai,
        video: '/videos/agendai.mp4',
        description: `O objetivo do projeto foi desenvolver habilidades técnicas e organizacionais por meio da criação do Agendai, um sistema web de agendamento de salas. A aplicação foi desenvolvida em PHP, utilizando o framework Laravel, com MySQL como banco de dados, permitindo o controle de reservas, a visualização de horários disponíveis e o gerenciamento de salas de forma prática e intuitiva.

Foram aplicados conceitos como autenticação de usuários, separação de perfis e relacionamento entre salas e reservas, além do uso de HTML, CSS e JavaScript no front-end, garantindo a correta organização dos agendamentos, uma boa experiência de uso e evitando conflitos de horários.`,

        date: '25 de Junho de 2025',
        github: 'https://github.com/joaliny/ReservaSalas'
    },


    {
        id: 2,
        title: 'Adote-me',
        subtitle: 'Plataforma de adoção responsável de animais 🐶🐱',
        techs: ['Python', 'Flask', 'MySQL', 'HTML', 'CSS', 'JS'],
        image: adoteMe,
        video: '/videos/adote-me.mp4',
        description: `O projeto Adote-me foi desenvolvido com o propósito de incentivar a adoção responsável de animais, oferecendo uma plataforma digital que aproxima pessoas interessadas em adoção de animais que precisam de um novo lar. O sistema possibilita a visualização dos animais disponíveis, com informações claras e organizadas, tornando o processo de adoção mais acessível e consciente.

        A aplicação foi desenvolvida utilizando Python e o framework Flask, com MySQL para o gerenciamento do banco de dados e HTML, CSS e JavaScript no front-end, garantindo uma navegação simples, funcional e uma boa experiência de uso para os usuários interessados em adotar.`,
        date: '28 de Novembro de 2025',
        github: 'https://github.com/joaliny/adote-me'
    },

    {
        id: 3,
        title: 'Task Manager',
        techs: ['JS', 'HTML', 'CSS'],
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop'
    },
    {
        id: 4,
        title: 'JP Bothanica',
        subtitle: 'Site institucional para venda de gramas naturais 🌿',
        techs: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript'],
        image: sitegrama,
        video: '/videos/site_grama.mp4',
        description: `O projeto JP Bothanica foi desenvolvido como um site institucional voltado à divulgação e comercialização 
    de gramas naturais, como Esmeralda, São Carlos, Bermuda e Batatais. A plataforma apresenta os produtos de forma visual 
    e organizada, destacando preços, características e diferenciais, além de facilitar o contato direto com clientes 
    por meio do WhatsApp.

    A aplicação conta com seções estratégicas como carrossel interativo, apresentação dos tipos de grama, portfólio de 
    trabalhos realizados, diferenciais da empresa e informações institucionais. O sistema foi construído utilizando 
    Python com Django no back-end e HTML, CSS e JavaScript no front-end, garantindo uma navegação fluida, responsiva e 
    uma experiência agradável ao usuário.`,
        date: '28 de setembro de 2025',
        github: 'https://github.com/joaliny/grama_store'
    },

    {
        id: 5,
        title: 'SoS Rio Grande do Sul',
        subtitle: 'Blog informativo sobre as enchentes no RS 🌧️',
        techs: ['HTML', 'CSS', 'JavaScript'],
        image: blogRS,
        video: '/videos/sos-rs.mp4',
        description: `O projeto SoS Rio Grande do Sul foi desenvolvido com o objetivo de reunir e divulgar informações relevantes sobre as enchentes que atingiram o estado do Rio Grande do Sul. A plataforma centraliza notícias, vídeos e atualizações sobre a situação das regiões afetadas, além de conteúdos voltados à conscientização e ao apoio às vítimas.

    O blog foi construído utilizando HTML, CSS e JavaScript, priorizando uma navegação simples, acessível e responsiva. A aplicação conta com organização clara do conteúdo, foco em usabilidade e integração com links externos para ações solidárias, contribuindo para a disseminação de informação confiável e o incentivo à mobilização social.`,
        date: '29 deOutubro de 2024',
        github: 'https://github.com/joaliny/sos-rio-grande-do-sul'
    },


];


function Projects() {
    const projectsRef = useRef(null);

    const [hoveredCard, setHoveredCard] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            },
            { threshold: 0.25, rootMargin: '0px 0px -10% 0px' }
        );

        if (projectsRef.current) {
            observer.observe(projectsRef.current);
        }

        return () => {
            if (projectsRef.current) {
                observer.unobserve(projectsRef.current);
            }
            observer.disconnect();
        };
    }, []);

    const handleVerMaisClick = (project, e) => {
        e.stopPropagation();
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <section id="projects" className="projects" ref={projectsRef}>
            <div className="container">
                <div className="projects-header">
                    <h2 className="section-title">Projetos</h2>
                </div>

                <div className="projects-grid">
                    {projects.map(project => (
                        <div
                            key={project.id}
                            className={`project-card-container ${hoveredCard === project.id ? 'hovered' : ''
                                }`}
                            onMouseEnter={() => setHoveredCard(project.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="project-card">
                                <div className="card-image-container">
                                    <div className="project-image">
                                        <img src={project.image} alt={project.title} />
                                        <div className="image-overlay"></div>

                                        <div className="project-overlay-content">
                                            <h3>{project.title}</h3>

                                            <div className="project-techs">
                                                {project.techs.map((tech, index) => (
                                                    <span key={index} className="tech-icon">
                                                        {techIcons[tech]}
                                                    </span>
                                                ))}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-expandable-content">
                                <button
                                    className="ver-mais-btn"
                                    onClick={(e) =>
                                        handleVerMaisClick(project, e)
                                    }
                                >
                                    Ver mais
                                    <FiChevronDown className="btn-icon" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* MODAL */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={closeModal}
                />
            )}
        </section>
    );
}

export default Projects;
