import React from 'react';
import { education } from '../../data/cv.json';

export const EducationCard = () => {
  return (
    <ul>
      {education.map(({ institution, startDate, endDate, area }, index) => {
        const startYear = new Date(startDate).getFullYear();
        let endYear = endDate !== "" ? new Date(endDate).getFullYear() : 'Actual';
        endYear = isNaN(endYear) ? 'Actual' : endYear;
        const years = `${startYear} - ${endYear}`;

        return (
          <li key={index}>
            <article>
              <header>
                <div>
                  <h3>{institution}</h3>
                </div>

                <time>{years}</time>
              </header>

              <footer>
                <p>{area}</p>
              </footer>
            </article>
          </li>
        );
      })}
    </ul>
  );
};

