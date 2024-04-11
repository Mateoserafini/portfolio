import React, { useState } from 'react';
import style from './NavBar.module.css';

export const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openNav = () => {
    setMobileMenuOpen(true);
  };

  const closeNav = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header>
      <nav className={style.containerNav}>
        <a className={style.titleNav} href="/">
          Mateo Serafini
        </a>
        <ul className={style.ulNavBar}>
          <li className={style.liNavBar}>
            <a href="#skills">Tecnologias</a>
          </li>
          <li className={style.liNavBar}>
            <a href="#education">Educacíon</a>
          </li>
          <li className={style.liNavBar}>
            <a href="#projects">Projects</a>
          </li>
          <li className={style.liNavBar}>
            <a href="#contact">Contacto</a>
          </li>
          <li className={style.liNavBarMovile}>
            <a onClick={openNav}>Abrir menú</a>
          </li>
        </ul>
      </nav>
      {isMobileMenuOpen && (
        <div id="mobile-menu" className={style.contentMobileNavBar}>
          <div className={style.mobileNavBar}>
            <li className={style.liNavBarMovile}onClick={closeNav} >
              <a href="#skills">Tecnologias</a>
            </li>
            <li className={style.liNavBarMovile}onClick={closeNav} >
              <a href="#education">Educacíon</a>
            </li>
            <li className={style.liNavBarMovile} onClick={closeNav} >
              <a href="#projects">Proyectos</a>
            </li>
            <li className={style.liNavBarMovile} onClick={closeNav} >
              <a href="#contact">Contact</a>
            </li>
            <li className={style.liNavBarMovile} onClick={closeNav} >
              <a>Cerrar menú</a>
            </li>
          </div>
        </div>
      )}
    </header>
  );
};
