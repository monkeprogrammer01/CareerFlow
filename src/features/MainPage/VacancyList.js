import React from 'react';
import '/Users/arsensejtkaliev/PycharmProjects/HeadHunter2.0/careerflowfrontend/src/features/MainPage/VacancyList.css'
const VacancyList = ({ vacancies }) => {
  return (
    <div className="vacancy-list">
      {vacancies.length ? (
        vacancies.map((vacancy) => (
          <div key={vacancy.id} className="vacancy-card">
            <h3>{vacancy.title}</h3>
            <p>{vacancy.description}</p>
            <p><strong>Requirements:</strong> {vacancy.requirements}</p>
    
          </div>
        ))
      ) : (
        <p>No vacancies available</p>
      )}
    </div>
  );
};

export default VacancyList;
