import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Results.css';

const Results = () => {
  const location = useLocation();
  const { responseData } = location.state;
  const [companyNames, setCompanyNames] = useState([]);

  useEffect(() => {
    if (responseData.score) {
      const url = `https://script.google.com/macros/s/AKfycbyPLP9GThLrbk4HoqukXzZssWAiab4VKg1wyoCev2ScYTBlxw-gr6VggghBw5CkfZW35A/exec?target=${responseData.score}`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log('Fetched data:', data);
          if (data.data && Array.isArray(data.data)) {
            const lastThreeCompanies = data.data.slice(-3); // Get last three companies
            setCompanyNames(lastThreeCompanies.map(company => company.name));
            console.log(lastThreeCompanies);
          } else {
            console.error('Data is not an array:', data);
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [responseData.score]);

  return (
    <div className="results-container">
      <div className="results-card">
        <h2 className="results-heading">Response Data</h2>
        <div className="results-content">
          <div className="result-item">
            <span className="result-label">Score:</span>
            <span className="result-value">{responseData.score}</span>
          </div>
          <div className="result-item">
            <span className="result-label">Status:</span>
            <span className="result-value">{responseData.status}</span>
          </div>
        </div>
        <Link
          to="/newportfolio"
          state={{ companyNames }}
          className="enhance-portfolio-button"
        >
          Enhance Portfolio
        </Link>
      </div>
    </div>
  );
};

export default Results;
