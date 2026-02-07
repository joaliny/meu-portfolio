import { useEffect, useRef } from 'react';
import { FiDownload, FiMail } from 'react-icons/fi';
import './Hero.css';
import joalinyImg from '../assets/icons/joaliny3.png';


function Hero() {
    const heroRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => {
            if (heroRef.current) {
                observer.unobserve(heroRef.current);
            }
        };
    }, []);

    const scrollToContact = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero">
            <div className="hero-content">
                {/* IMAGEM À ESQUERDA */}
                <div className="hero-image">
                    <div className="image-placeholder">
                        <img
                            src={joalinyImg}
                            alt="Foto de Joaliny"
                            className="image-square"
                        />

                        <div className="image-dots">
                            {Array.from({ length: 9 }).map((_, i) => (
                                <span key={i} className="dot"></span>
                            ))}
                        </div>
                    </div>
                </div>



                {/* TEXTO À DIREITA */}
                <div className="hero-text">
                    <p className="hero-greeting">Olá, me chamo</p>

                    <h1 className="hero-title">
                        <span className="title-name">Joaliny Furtado</span>
                        <span className="title-colon">:)</span>
                    </h1>

                    <span className="role-line">
                        Desenvolvedora Back-end em Formação | PHP | Python | Laravel | Django | JavaScript
                    </span>
                    


                    <div className="hero-buttons">
                        <button className="btn-primary">
                            <FiDownload />
                            Download CV
                        </button>
                        <button
                            className="btn-outline"
                            onClick={() => {
                                window.location.href = 'mailto:joalinyfurtado87@gmail.com';
                            }}
                        >
                            <FiMail />
                            Entrar em contato
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;