import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Register from './Auth/Register';
import Login from './Auth/Login';
import Dashboard from './pages/Dashboard';
import { useAuth } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Chatbot from './components/Chatbot';
import Report from './components/Report';
import ReportResult from './components/ReportResult';
import Portfolio from './components/Portfolio';
import Results from './components/Results';
import Edu from './components/Edu';
import NewPortfolio from './components/NewPortfolio';

const App = () => {
    const { isAuthenticated } = useAuth();

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/" />} />
                <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/login" />} />
                <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
                <Route path="/chatbot" element={<Chatbot />} />
                <Route path="/report" element={isAuthenticated ? <Report /> : <Navigate to="/login" />} />
                <Route path="/report/result/:company" element={<ReportResult />} />
                <Route path="/portfolio" element={isAuthenticated ? <Portfolio /> : <Navigate to="/login" />} />
                <Route path="/results" element={<Results />} />
                <Route path="/edu" element={<Edu />} />
                <Route path="/newportfolio" element={<NewPortfolio />} />
            </Routes>
        </Router>
    );
};

export default App;
