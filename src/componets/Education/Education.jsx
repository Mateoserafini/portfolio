import { EducationCard } from "../EducationCard/EducationCard"
import style from './Education.module.css'
export const Education = () => {
    return (
    <section  id="education" className={style.wrapper}>
      <div className={style.content}>
        <h2 className={style.tittleEducation}>Educacíon</h2>
          <EducationCard/>
      </div>
    </section>
  )
}