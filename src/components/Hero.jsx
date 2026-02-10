import { useEffect, useRef, useState } from 'react';
import { FiDownload, FiMail } from 'react-icons/fi';
import './Hero.css';

/* =========================
   COMPONENTE TYPEWRITER
========================= */
function Typewriter({ text, speed = 100, delay = 60, onDone }) {
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
    const [greetingDone, setGreetingDone] = useState(false);
    const [nameDone, setNameDone] = useState(false);

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
                            src="/assets/icons/joaliny9.jpg" 
                            alt="Foto de Joaliny" 
                            className="image-square"
                        />
                    </div>
                </div>

                {/* TEXTO */}
                <div className="hero-text">
                    <p className="hero-greeting">
                        <Typewriter
                            text="Olá, me chamo"
                            delay={100}
                            speed={30}
                            onDone={() => setGreetingDone(true)}
                        />
                    </p>

                    <h1 className="hero-title">
                        <span className="title-name">
                            {greetingDone && (
                                <Typewriter
                                    text="Joaliny Furtado"
                                    delay={50}
                                    speed={10}
                                    onDone={() => setNameDone(true)}
                                />
                            )}
                        </span>
                        <span className="title-colon">:)</span>
                    </h1>

                    <span className="role-line">
                        {nameDone && (
                            <Typewriter
                                text="Desenvolvedora Back-end em Formação | PHP | Python | Laravel | Django | JavaScript"
                                delay={40}
                                speed={10}
                            />
                        )}
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
