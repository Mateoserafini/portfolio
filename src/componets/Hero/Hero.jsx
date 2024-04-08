import React from 'react';
import { Contact } from '../Contact/Contact.jsx'
import style from './Hero.module.css'

export const Hero = () => {
  return (
    <section className={style.wrapper}>
      <div className={style.wrapperHero}>
        <div className={style.info}>
          <div>
            <h1 className={style.superTitle}>Hola, soy Mateo.</h1>
            <h2 className={style.label}>
            ¡Hola! 👋 Soy Mateo Serafini, un Técnico en Programación apasionado por la tecnología y 
            la enseñanza. <br/>Como desarrollador front-end, disfruto creando interfaces web atractivas y 
            fáciles de usar que brindan una experiencia de usuario excepcional. 💻
            </h2>
          </div>
          <Contact/>
        </div>
        <img className={style.imgHero}
          src='https://avatars.githubusercontent.com/u/113142530?v=4'
          alt=""
        />
      </div>
    </section>
  );
};