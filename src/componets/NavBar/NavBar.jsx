import style from './NavBar.module.css'
export const NavBar = () => {

  return (
    <header>
      <nav className={style.containerNav}>
        <a  className={style.titleNav} href="/">
          Mateo Serafini
        </a>
          <ul className={style.ulNavBar}>
            <li className={style.liNavBar} >
              <a href="#about">Sobre mi</a>
            </li>
            <li className={style.liNavBar} >
              <a href="#education">Educacíon</a>
            </li>
            <li className={style.liNavBar} >
              <a href="#skills">Skills</a>
            </li>
            <li className={style.liNavBar} >
              <a href="#projects">Projects</a>
            </li> 
            {/* <li>
              <a href="#contact">Contactame</a>
            </li> */}
          </ul>
      </nav>
    </header>
  );
};