import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import companyNames from '../companyNames';
import './Portfolio.css';

const Portfolio = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [bucketName, setBucketName] = useState('');
  const [showBucketSection, setShowBucketSection] = useState(false);
  const [showBucket, setShowBucket] = useState(false);
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setFilteredCompanies(companyNames.filter(name => name.toLowerCase().includes(value.toLowerCase())));
  };

  const handleCompanyClick = (company) => {
    if (selectedCompanies.includes(company)) {
      setSelectedCompanies(selectedCompanies.filter(item => item !== company));
    } else {
      setSelectedCompanies([...selectedCompanies, company]);
    }
    setSearchTerm('');
    setFilteredCompanies([]);
  };

  const handleCreateBucket = () => {
    if (bucketName.trim()) {
      setShowBucketSection(true);
    } else {
      alert('Please enter a bucket name first.');
    }
  };

  const handleBucketNameChange = (event) => {
    setBucketName(event.target.value);
  };

  const handleShowBucket = () => {
    setShowBucket(true);
  };

  const handleFinish = () => {
    const requestData = {
      companies: selectedCompanies,
    };

    const apiUrl = 'http://65.0.98.78:5000/predict';

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      navigate('/results', { state: { responseData: data } });
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  const handleRemoveCompany = (company) => {
    setSelectedCompanies(selectedCompanies.filter(item => item !== company));
  };

  return (
    <div className="portfolio-container">
      <div className="upper-part">
        <h1>Portfolio</h1>
      </div>
      <div className="middle-part">
        <div className="left-side">
          {!showBucketSection && (
            <div className="bucket-name-section">
              <button onClick={handleCreateBucket} className="create-bucket-btn">Create Bucket</button>
              <input
                type="text"
                placeholder="Enter bucket name..."
                value={bucketName}
                onChange={handleBucketNameChange}
                className="bucket-input"
              />
            </div>
          )}
          {showBucketSection && (
            <>
              <input
                type="text"
                placeholder="Search for a company..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-box"
              />
              {filteredCompanies.length > 0 && (
                <ul className="suggestions-list">
                  {filteredCompanies.map((company, index) => (
                    <li 
                      key={index} 
                      className="suggestion-item" 
                      onClick={() => handleCompanyClick(company)}
                    >
                      {company}
                    </li>
                  ))}
                </ul>
              )}
              <div className="bucket-section">
                <div className="selected-companies">
                  {selectedCompanies.map((company, index) => (
                    <div key={index} className="selected-company">
                      {company}
                      <button className="remove-company-btn" onClick={() => handleRemoveCompany(company)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
        <div className="right-side">
          <button onClick={handleShowBucket} className="show-bucket-btn2" >Show Bucket</button>
          {showBucket && (
            <div className="bucket-display">
              <h2>Bucket: {bucketName}</h2>
              {selectedCompanies.length > 0 ? (
                <ul>
                  {selectedCompanies.map((company, index) => (
                    <li key={index}>{company}</li>
                  ))}
                </ul>
              ) : (
                <p>No companies added to the bucket.</p>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="lower-part">
        <button onClick={handleFinish} className="finish-btn">Finish</button>
      </div>
    </div>
  );
};

export default Portfolio;
