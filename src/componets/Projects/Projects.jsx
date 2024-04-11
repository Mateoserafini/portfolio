'use client'
import style from './Projects.module.css';
import { TypeAnimation } from 'react-type-animation';
export const Projects = () => {
    return (
      <section id="projects" className={style.wrapper}>
        <div className={style.content}>
          <h2>
            <TypeAnimation 
            sequence={[
              "Nuevos proyectos pronto...",1000,
              "New projects soon...",1000
            ]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
            />
            </h2>
            
        </div>
      </section>
    );
  };