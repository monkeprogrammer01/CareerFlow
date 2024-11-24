import React, { useState, useEffect } from 'react';
import Navbar from '/Users/arsensejtkaliev/PycharmProjects/HeadHunter2.0/careerflowfrontend/src/features/MainPage/Navbar.js';
import VacancyFilter from '/Users/arsensejtkaliev/PycharmProjects/HeadHunter2.0/careerflowfrontend/src/features/MainPage/VacancyFilter.js';
import VacancyList from "/Users/arsensejtkaliev/PycharmProjects/HeadHunter2.0/careerflowfrontend/src/features/MainPage/VacancyList.js";
import '/Users/arsensejtkaliev/PycharmProjects/HeadHunter2.0/careerflowfrontend/src/features/MainPage/MainPage.css';
import axios from 'axios';


const MainPage = () => {
  const [vacancies, setVacancies] = useState([]);
  const [filters, setFilters] = useState({ specialization: '', level: '' });

  useEffect(() => {
    // Fetch vacancies from Django backend (use your API URL)
    fetchVacancies();
  }, [filters]);

  const fetchVacancies = async () => {
    axios.get('http://localhost:8000/vacancies/')
  .then(response => {
    console.log('Vacancies:', response.data);
    setVacancies(response.data)
  })
  .catch(error => {
    console.error('Error fetching vacancies:', error);
  });
  
  };

  return (
    <div className="main-page">
      <Navbar />
      <div className="main-content">
        <div className="filter-section">
          <VacancyFilter filters={filters} setFilters={setFilters} />
        </div>
        <div className="vacancy-section">
          <VacancyList vacancies={vacancies} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
