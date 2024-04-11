import React from 'react';
import style from './EducationCard.module.css'
import { education } from '../../data/cv.json';

export const EducationCard = () => {
  return (
    <span className={style.contentEducationCard}>
      {education.map(({ institution, startDate, endDate, area }, index) => {
        const startYear = new Date(startDate).getFullYear();
        let endYear = endDate !== "" ? new Date(endDate).getFullYear() : 'Actual';
        endYear = isNaN(endYear) ? 'Actual' : endYear;
        const years = `${startYear} - ${endYear}`;

        return (
          <li key={index} className={style.cardEducation}>
            <div className={style.contentCard}>
              <header className={style.headerCard}>
                  <h3>{institution}</h3>
                  <time>{years}</time>
              </header>
              <footer className={style.footerCard}>
                <p>{area}</p>
              </footer>
            </div>
          </li>
        );
      })}
    </span>
  );
};

