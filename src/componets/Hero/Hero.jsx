import React from 'react';
import { Contact } from '../Contact/Contact.jsx'

export const Hero = () => {
  return (
    <section>
      <div>
        <h1>Hola, soy Mateo.</h1>
        <p>
          Tecnico en Programacion y Desarrolador Front end.
        </p>
      </div>
      <img
        src='https://avatars.githubusercontent.com/u/113142530?v=4'
        alt=""
      />
      <Contact/>
    </section>
  );
};