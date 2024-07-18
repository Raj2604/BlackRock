import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Form, AutoComplete, Button, Typography } from 'antd';
import companyNames from '../companyNames'; // Import the company names
import './Report.css'; // Import custom styles

const { Title } = Typography;

const Report = () => {
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (value) => {
    setOptions(
      value
        ? companyNames
            .filter((name) => name.toLowerCase().includes(value.toLowerCase()))
            .map((name) => ({ value: name }))
        : []
    );
  };

  const handleFormSubmit = (values) => {
    console.log('Selected company:', values.company);
    if (values.company) {
      navigate(`/report/result/${encodeURIComponent(values.company)}`);
    }
  };

  return (
    <div className="report-container">
      <Card className="report-card">
        <Title level={2} className="report-title">Generate Report</Title>
        <Form onFinish={handleFormSubmit} className="report-form">
          <Form.Item
            name="company"
            rules={[{ required: true, message: 'Please select a company!' }]}
          >
            <AutoComplete
              options={options}
              onSearch={handleSearch}
              placeholder="Type to search for a company"
              size="large"
              filterOption={(inputValue, option) =>
                option.value.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
              }
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" className='green' htmlType="submit" size="large" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Report;
