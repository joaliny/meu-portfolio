import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <a href="#home" className="logo">
                            <span className="logo-text">Rhuan</span>
                            <span className="logo-dot">.</span>
                        </a>
                        <p className="footer-description">
                            Desenvolvedor Front-End especializado em criar experiências digitais incríveis
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Links Rápidos</h4>
                            <ul>
                                <li><a href="#home">Início</a></li>
                                <li><a href="#about">Sobre</a></li>
                                <li><a href="#projects">Projetos</a></li>
                                <li><a href="#contact">Contato</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Tecnologias</h4>
                            <ul>
                                <li>React.js</li>
                                <li>Next.js</li>
                                <li>TypeScript</li>
                                <li>Node.js</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Rhuan Bello. Todos os direitos reservados.</p>
                    <p className="footer-note">
                        Feito com ❤️ por mim mesmo
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;