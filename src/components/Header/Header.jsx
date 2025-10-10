import { useState, useEffect } from 'react';
import styles from './Header.module.css';

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
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollPara = (id) => {
    const elemento = document.getElementById(id);
    if (elemento) elemento.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`${styles.header} ${isScrollingDown ? styles.headerHidden : ''}`}>
      <nav className={styles.navLinks}>
        <a className={styles.link} onClick={() => scrollPara('sobre')}>Sobre mim</a>
        <a className={styles.link} onClick={() => scrollPara('skills')}>Skills</a>
        <a className={styles.link} onClick={() => scrollPara('experiencias')}>Experiências</a>
        <a className={styles.link} onClick={() => scrollPara('projetos')}>Projetos</a>
        <a className={styles.link} onClick={() => scrollPara('estudos')}>Estudos</a>

        <div
          className={styles.dropdownWrapper}
          onMouseEnter={() => setShowOptions(true)}
          onMouseLeave={() => setShowOptions(false)}
        >
          <a className={styles.link}>Contato</a>
          <div className={`${styles.dropdownMenu} ${showOptions ? styles.show : ''}`}>
            <a href="https://github.com/Guilherme0112" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/guilherme-mendes-gomes/" target="_blank">LinkedIn</a>
            <a href="mailto:guimendesmen124@gmail.com">Gmail</a>
            <a href="https://www.instagram.com/gui.espanhol_" target="_blank">Instagram</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
