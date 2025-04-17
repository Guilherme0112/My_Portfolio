import { useState, useEffect } from 'react';
import '../css/Components.module.css';

function Header() {

    const [showOptions, setShowOptions] = useState(false);

    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setIsScrollingDown(true);
            } else {
                setIsScrollingDown(false);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const scrollPara = (id) => {
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.scrollIntoView({ behavior: 'smooth' });
        }
    };


    const handleMouseEnter = () => {
        setShowOptions(true);
    };

    const handleMouseLeave = () => {
        setShowOptions(false);
    };

    return (
        <header className={`header ${isScrollingDown ? 'header-hidden' : ''}`}>
            <nav style={{ width: "100%" }}>
                <a onClick={() => scrollPara("projetos")}>Projetos</a>
                <a onClick={() => scrollPara("sobre")}>Sobre mim</a>
                <a onClick={() => scrollPara("skills")}>Skills</a>
                <a onClick={() => scrollPara("estudos")}>Estudos</a>
                <div
                    onMouseEnter={() => setShowOptions(true)}
                    onMouseLeave={() => setShowOptions(false)}
                    style={{ position: 'relative', display: 'inline-block' }}
                >
                    <a style={{ color: 'white', cursor: 'pointer' }}>Contato</a>

                    <div
                        style={{
                            position: 'absolute',
                            top: '30px',
                            left: '0',
                            width: '120px',
                            background: '#333',
                            padding: '10px',
                            borderRadius: '5px',
                            display: 'grid',
                            gap: '5px',
                            opacity: showOptions ? 1 : 0,
                            visibility: showOptions ? 'visible' : 'hidden',
                            transition: 'opacity 0.3s ease, visibility 0.3s ease',
                            zIndex: 10,
                        }}
                    >

                        <a href="https://github.com/Guilherme0112" target='_blank'>GitHub</a>
                        <a href="https://www.linkedin.com/in/guilherme-mendes-gomes/" target='_blank'>LinkedIn</a>
                        <a href="mailto:guimendesmen124@gmail.com">Gmail</a>
                        <a href="https://www.instagram.com/gui.espanhol_" target='_blank'>Instagram</a>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;