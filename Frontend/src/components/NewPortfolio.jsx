import React from 'react';
import { useLocation } from 'react-router-dom';
import './NewPortfolio.css';

const NewPortfolio = () => {
    const location = useLocation();
    const { companyNames } = location.state;

    return (
        <div className="new-portfolio-container">
            <div className="new-portfolio-card">
                <h2 className="new-portfolio-heading">Enhanced Portfolio</h2>
                {companyNames && companyNames.length > 0 ? (
                    <ul className="company-list">
                        {companyNames.map((name, index) => (
                            <li key={index} className="company-item">
                                {name}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No companies found</p>
                )}
            </div>
        </div>
    );
};

export default NewPortfolio;
