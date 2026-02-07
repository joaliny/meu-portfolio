import { useRef, useEffect } from 'react';
import { FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi';
import './Contact.css';

function Contact() {
    const contactRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            },
            { threshold: 0.25, rootMargin: '0px 0px -10% 0px' }
        );

        if (contactRef.current) {
            observer.observe(contactRef.current);
        }

        return () => {
            if (contactRef.current) {
                observer.unobserve(contactRef.current);
            }
            observer.disconnect();
        };
    }, []);

    return (
        <section id="contact" className="contact" ref={contactRef}>
            <div className="container">
                <h2 className="section-title-cont">Contatos</h2>

                <div className="contacts-container">

                    {/* EMAIL */}
                    <a
                        href="mailto:joalinyfurtado87@gmail.com"
                        className="contact-item"
                    >
                        <div className="contact-icon-container">
                            <FiMail className="contact-icon" />
                        </div>

                        <div className="contact-content">
                            <span className="contact-label">E-mail</span>
                            <span className="contact-value">
                                joalinyfurtado87@gmail.com
                            </span>
                        </div>
                    </a>

                    {/* WHATSAPP */}
                    <a
                        href="https://wa.me/5592995234735?text=Olá!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20falar%20com%20você."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-item"
                    >
                        <div className="contact-icon-container">
                            <FiPhone className="contact-icon" />
                        </div>

                        <div className="contact-content">
                            <span className="contact-label">Telefone</span>
                            <span className="contact-value">
                                (92) 99523-4735
                            </span>
                        </div>
                    </a>

                    {/* LINKEDIN */}
                    <a
                        href="https://www.linkedin.com/in/joaliny-oliveira-furtado-3a82b91b8/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-item"
                    >
                        <div className="contact-icon-container">
                            <FiLinkedin className="contact-icon" />
                        </div>

                        <div className="contact-content">
                            <span className="contact-label">LinkedIn</span>
                            <span className="contact-value">
                                @Joaliny Furtado
                            </span>
                        </div>
                    </a>

                    {/* GITHUB */}
                    <a
                        href="https://github.com/joaliny"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-item"
                    >
                        <div className="contact-icon-container">
                            <FiGithub className="contact-icon" />
                        </div>

                        <div className="contact-content">
                            <span className="contact-label">GitHub</span>
                            <span className="contact-value">
                                @joaliny
                            </span>
                        </div>
                    </a>

                </div>
            </div>
        </section>
    );
}

export default Contact;
