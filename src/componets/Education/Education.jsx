import React from 'react';
import { EducationCard } from "../EducationCard/EducationCard"
import style from './Education.module.css'
export const Education = () => {
    return (
    <section  id="education" className={style.wrapper}>
      <div className={style.content}>
        <div className={style.contentEducation}>
          <h2 className={style.tittleEducation}>Educacíon</h2>
          <EducationCard/>
        </div>
      </div>
    </section>
  )
}