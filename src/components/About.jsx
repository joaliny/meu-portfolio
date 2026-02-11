import { useState, useRef, useEffect } from 'react';
import './About.css';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { BsFiletypeJs } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";

// ✅ URLS DIRETAS DAS IMAGENS (sem import)
const flaskIconUrl = "/assets/icons/1.png";
const djangoIconUrl = "/assets/icons/2.png";

// Lista de habilidades
const skillsData = [
    { name: 'HTML5', icon: <FaHtml5 />, color: '#81398e', isEmoji: false },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#81398e', isEmoji: false },
    { name: 'JavaScript', icon: <BsFiletypeJs />, color: '#81398e', isEmoji: false },
    { name: 'React', icon: <FaReact />, color: '#81398e', isEmoji: false },
    { name: 'PHP', icon: <FaPhp />, color: '#81398e', isEmoji: false },
    { name: 'Python', icon: <FaPython />, color: '#81398e', isEmoji: false },
    { name: 'Laravel', icon: <FaLaravel />, color: '#81398e', isEmoji: false },
    {
        name: 'Flask',
        icon: <img src={flaskIconUrl} alt="Flask" className="skill-icon-img" />,
        color: '#81398e',
        isEmoji: false
    },
    {
        name: 'Django',
        icon: <img src={djangoIconUrl} alt="Django" className="skill-icon-img-django" />,
        color: '#81398e',
        isEmoji: false
    },
    { name: "Figma", icon: <FaFigma />, color: "#81398e", isEmoji: false },
];

function About() {
    const aboutRef = useRef();
    const skillsRef = useRef();
    const [activeSkill, setActiveSkill] = useState(null);

    useEffect(() => {
        const aboutObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const skillsObserver = new IntersectionObserver(
            (entries) => {
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

        if (aboutRef.current) {
            aboutObserver.observe(aboutRef.current);
        }

        if (skillsRef.current) {
            skillsObserver.observe(skillsRef.current);
        }

        return () => {
            if (aboutRef.current) {
                aboutObserver.unobserve(aboutRef.current);
            }
            if (skillsRef.current) {
                skillsObserver.unobserve(skillsRef.current);
            }
        };
    }, []);

    // Função para converter hex para rgb
    const hexToRgb = (hex) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `${r}, ${g}, ${b}`;
    };

    // Função para determinar classe de nível
    const getLevelClass = (level) => {
        const levelMap = {
            'AVANÇADO': 'advanced',
            'INTERMEDIÁRIO': 'intermediate',
            'BÁSICO': 'basic',
            'ADVANCED': 'advanced',
            'INTERMEDIATE': 'intermediate',
            'BASIC': 'basic'
        };
        return levelMap[level.toUpperCase()] || 'intermediate';
    };

    return (
        <section id="about" className="about" ref={aboutRef}>
    <div className="container">
        <div className="about-top">
            <div className="about-text">
                <h2 className="section-title">Sobre mim</h2>
                
                {/* UM ÚNICO PARÁGRAFO (como na imagem) */}
                <div className="about-description">
                    <p>
                                Sou desenvolvedora em formação, movida pela curiosidade e pela vontade de criar soluções que façam sentido no mundo real. Minha trajetória na tecnologia começou no suporte de TI e, com o tempo, evoluiu para o desenvolvimento de sistemas, onde tive contato com PHP/Laravel e Python/Flask.

                                Durante a graduação em Sistemas de Informação, desenvolvi projetos práticos como um sistema de agendamento de salas e uma plataforma de adoção de pets, sempre buscando unir tecnologia, organização e uma boa experiência para quem usa. Acredito que código limpo, arquitetura bem estruturada e aprendizado contínuo são a base para criar aplicações eficientes e evoluir como profissional todos os dias.
                    </p>
                </div>


                        {/* <div className="about-stats">
                            <div className="stat">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">Projetos Concluídos</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">3+</span>
                                <span className="stat-label">Anos de Experiência</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">30+</span>
                                <span className="stat-label">Clientes Satisfeitos</span>
                            </div>
                        </div> */}
                    </div>
                </div>

                {/* Parte 2: Habilidades - APENAS 2 FILEIRAS */}
                <div className="about-bottom">
                    <div className="skills-section" id="skills" ref={skillsRef}>
                        <div className="skills-container">
                            <div className="skills-header">
                                <h2 className="skills-title">Habilidades</h2>
                                {/* <p className="skills-subtitle">
                                    Tecnologias e ferramentas que domino e utilizo no dia a dia
                                </p> */}
                            </div>

                            <div className="skills-grid">
                                {skillsData.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="skill-card"
                                        style={{
                                            '--skill-color': skill.color,
                                            '--skill-color-rgb': hexToRgb(skill.color)
                                        }}
                                    >
                                        {/* APENAS O ÍCONE (grande e centralizado) */}
                                        <div className="skill-icon-container">
                                            <div className={`skill-icon ${skill.small ? 'small' : ''} ${skill.isEmoji ? 'emoji' : ''}`}>
                                                {skill.icon}
                                            </div>
                                        </div>

                                        {/* APENAS O NOME DA FERRAMENTA (abaixo do ícone) */}
                                        <div className="skill-name">{skill.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
