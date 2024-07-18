import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ReportResult.css';

const ReportResult = () => {
  const { company } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data for company:', company);
        const response = await fetch(`https://script.google.com/macros/s/AKfycbwTk5YLOvSd7wyQImpryUTLe-U0qqtDxRc7TMgsbngoN_11c06B8TraayiOvVJt_-D6fw/exec?name=${company}`);
        const result = await response.json();
        console.log('Fetched data:', result);
        if (result.data && result.data.length > 0) {
          setData(result.data[0]);
        } else {
          console.log('No data found for the company');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [company]);

  if (loading) {
    return (
        <div className="loading-container">
          <div className="spinner"></div>
          <div className="loading-text">Loading...</div>
        </div>
      );
  }

  if (!data) {
    return <div>No data found for the company</div>;
  }

  const getLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case 'low':
        return 'red';
      case 'medium':
        return 'yellow';
      case 'high':
        return '#82E959';
      default:
        return 'gray';
    }
  };

  return (
    <div className="result-container">
      <h1 className="company-name">{data.name}</h1>
      <table className="result-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Grade</th>
            <th>Level</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Environment</td>
            <td>{data.environment_grade}</td>
            <td>
              <div className="level-card" style={{ backgroundColor: getLevelColor(data.environment_level) }}>
                {data.environment_level}
              </div>
            </td>
            <td>{data.environment_score}</td>
          </tr>
          <tr>
            <td>Social</td>
            <td>{data.social_grade}</td>
            <td>
              <div className="level-card" style={{ backgroundColor: getLevelColor(data.social_level) }}>
                {data.social_level}
              </div>
            </td>
            <td>{data.social_score}</td>
          </tr>
          <tr>
            <td>Governance</td>
            <td>{data.governance_grade}</td>
            <td>
              <div className="level-card" style={{ backgroundColor: getLevelColor(data.governance_level) }}>
                {data.governance_level}
              </div>
            </td>
            <td>{data.governance_score}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>{data.total_grade}</td>
            <td>
              <div className="level-card" style={{ backgroundColor: getLevelColor(data.total_level) }}>
                {data.total_level}
              </div>
            </td>
            <td>{data.total_score}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReportResult;
