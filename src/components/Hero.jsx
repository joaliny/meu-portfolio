import { useEffect, useRef, useState } from 'react';
import { FiDownload, FiMail } from 'react-icons/fi';
import './Hero.css';
import joalinyImg from '../assets/icons/joaliny3.png';

/* =========================
   COMPONENTE TYPEWRITER
========================= */
function Typewriter({ text, speed = 60, delay = 0, onDone }) {
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const start = setTimeout(() => {
            if (index < text.length) {
                const timeout = setTimeout(() => {
                    setDisplayText((prev) => prev + text[index]);
                    setIndex(index + 1);
                }, speed);

                return () => clearTimeout(timeout);
            } else {
                onDone && onDone();
            }
        }, delay);

        return () => clearTimeout(start);
    }, [index, text, speed, delay, onDone]);

    return (
        <span className="typewriter">
            {displayText}
            <span className="cursor"></span>
        </span>
    );
}


/* =========================
   HERO
========================= */
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

    return (
        <section className="hero" ref={heroRef}>
            <div className="hero-content">

                {/* IMAGEM */}
                <div className="hero-image">
                    <div className="image-placeholder">
                        <img
                            src={joalinyImg}
                            alt="Foto de Joaliny"
                            className="image-square"
                        />
                    </div>
                </div>

                {/* TEXTO */}
                <div className="hero-text">
                    <p className="hero-greeting">Olá, me chamo</p>

                    <h1 className="hero-title">
                        <span className="title-name">
                            <Typewriter text="Joaliny Furtado" />
                        </span>
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
                            onClick={() => window.location.href = 'mailto:joalinyfurtado87@gmail.com'}
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
