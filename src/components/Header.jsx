import { useState, useEffect, useRef } from 'react';
import './Header.css';

function Header({ theme, onToggleTheme }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const hamburgerRef = useRef(null);

    const menuItems = [
        { id: 'about', label: 'Sobre' },
        { id: 'skills', label: 'Habilidades' },
        { id: 'projects', label: 'Projetos' },
        { id: 'contact', label: 'Contato' },
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                hamburgerRef.current &&
                !hamburgerRef.current.contains(event.target)
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleNavClick = (sectionId) => {
        setIsMenuOpen(false);

        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
            {/* HEADER */}
            <header className="header">
                <div className="header-content">
                    <button
                        ref={hamburgerRef}
                        className={`hamburger-btn ${isMenuOpen ? 'open' : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <h1 className="logo">Portfólio</h1>

                    <button
                        className="theme-toggle"
                        onClick={onToggleTheme}
                        aria-label="Alternar tema"
                    >
                        <span className={`theme-toggle-track ${theme === 'dark' ? 'dark' : 'light'}`}>
                            <span className="theme-toggle-knob" />
                        </span>
                    </button>
                </div>
            </header>

            {/* MENU OVERLAY */}
            {isMenuOpen && (
                <div className="menu-overlay">
                    <nav ref={menuRef} className="menu-container">

                        {/* 🔥 TÍTULO DO MENU */}
                        <div className="menu-title">
                            <h2>Bem-vindo ao meu Portfólio :)</h2>
                            {/* <span>Meu Portfólio</span> */}
                        </div>

                        {/* ITENS */}
                        <div className="menu-items">
                            {menuItems.map((item) => (
                                <button
                                    key={item.id}
                                    className="menu-link"
                                    onClick={() => handleNavClick(item.id)}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>

                    </nav>
                </div>
            )}
        </>
    );
}

export default Header;
