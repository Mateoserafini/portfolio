export const NavBar = () => {

  return (
    <nav>
      <a href="/">
        Mateo Serafini
      </a>
      <div >
        <ul>
          <li>
            <a href="#about">Sobre mi</a>
          </li>
          <li>
            <a href="#education">Educacíon</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li> 
          {/* <li>
            <a href="#contact">Contactame</a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};