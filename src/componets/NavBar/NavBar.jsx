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
            <a onClick={openNav}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
              </svg></a>
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
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg></a>
            </li>
          </div>
        </div>
      )}
    </header>
  );
};
