import React from 'react';
import '/Users/arsensejtkaliev/PycharmProjects/HeadHunter2.0/careerflowfrontend/src/features/MainPage/VacancyFilter.css';

const VacancyFilter = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="vacancy-filter">
      <h3>Filters</h3>
      <div className="filter-group">
        <label htmlFor="specialization">Specialization</label>
        <select
          id="specialization"
          name="specialization"
          value={filters.specialization}
          onChange={handleChange}
        >
          <option value="">Select Specialization</option>
          <option value="Engineering">Engineering</option>
          <option value="Design">Design</option>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="level">Level</label>
        <select
          id="level"
          name="level"
          value={filters.level}
          onChange={handleChange}
        >
          <option value="">Select Level</option>
          <option value="Junior">Junior</option>
          <option value="Mid">Mid</option>
          <option value="Senior">Senior</option>
        </select>
      </div>
    </div>
  );
};

export default VacancyFilter;
