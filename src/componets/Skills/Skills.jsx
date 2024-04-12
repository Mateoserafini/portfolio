import React from 'react';
import style from './Skills.module.css'
import HTML from '../../assets/html.png'
import CSS from '../../assets/css.png'
import JAVASCRIPT from '../../assets/javascript.png'
import BOOTSTRAP from '../../assets/bootstrap.png'
import GIT from '../../assets/git.png'
import REACT from '../../assets/react.png'

export const Skills = () => {
  return (
    <section className={style.wrapper}>
      <div className={style.content}>
        <div className={style.mainHero}>
          <div className={style.skillsHero}>
            <h2 className={style.tittleSkills} id="skills">
              Tecnologías
            </h2>
            <span className={style.spanSkills}>
              <li><img className={style.imgSkills} src={HTML} alt="Icono de HTML." /></li>
              <li><img className={style.imgSkills} src={CSS} alt="Icono de CSS" /></li>
              <li><img className={style.imgSkills} src={JAVASCRIPT} alt="Icono de JAVASCRIPT" /></li>
              <li><img className={style.iconMini } src={BOOTSTRAP} alt="Icono de BOOTSTRAP" /></li>
              <li><img className={style.iconMini } src={GIT} alt="Icono de GIT" /></li>
              <li><img className={style.imgSkills} src={REACT} alt="Icono de REACT" /></li>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};