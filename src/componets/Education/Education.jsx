import { EducationCard } from "../EducationCard/EducationCard"
import style from './Education.module.css'
export const Education = () => {
    return (
    <section  id="education" className={style.wrapper}>
      <div>
        <h2>Educacíon</h2>
        <ul>
          <EducationCard/>
        </ul>
      </div>
    </section>
  )
}