import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import your landing page styles here
import heroImage from '../assets/hero2.jpg'; // Import your hero image
import logo from '../assets/logo.png'
const LandingPage = () => {
    return (
        <div className="landing-page">
            {/* Navbar */}
            <header className="navbar">
               <div className="container">
               <div className="navbar-left">
                <Link to="/"><img src={logo} alt="/" className='logo' /></Link>
                   
                </div>
                    <nav className="navbar-right">
                        <div className="navbar-links">
                            <Link to="/login">Login</Link>
                            <Link to="/register">Sign Up</Link>
                            <Link to="/report">Report</Link> {/* Report button */}
                            <Link to="/portfolio">Portfolio</Link> {/* Portfolio button */}
                        </div>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-content">
                    <div className="hero-left">
                        <img src={heroImage} alt="Hero" className="hero-image" />
                    </div>
                    <div className="hero-right">
                        <div className="hero-text">
                            <h1>Welcome to ESG Insights</h1>
                            <Link to="/register" className="btn btn-primary">Get Started</Link> {/* Link to your registration page */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Sections */}
            <section id="features" className="features-section">
                <div className="container">
                    <div className="features-row">
                        {/* Feature 1 */}
                        <div className="feature">
                            <h2>ESG Analysis</h2>
                            <p>Generate ESG (Environmental, Social, Governance) analysis of any company using its annual report.</p>
                            <div className="feature-rule"></div>
                        </div>

                        {/* Feature 2 */}
                        <div className="feature">
                            <h2>Sustainable Portfolio</h2>
                            <p>Create a diversified investment portfolio that showcases the sustainability of your future investments.</p>
                            <div className="feature-rule"></div>
                        </div>

                        {/* Feature 3 */}
                        <div className="feature">
                            <h2>Chatbot Assistance</h2>
                            <p>Interact with our AI-powered chatbot for personalized assistance and information about ESG and investments.</p>
                            <div className="feature-rule"></div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Education Button */}
            <div className="education-button-container">
                <Link to="/edu" className="btn btn-secondary education-button">Education</Link> {/* Add Education button */}
            </div>

            {/* Chatbot Button */}
            <Link to="/chatbot" className="chatbot-button">
                {/* The chatbot button remains unchanged here */}
            </Link>
        </div>
    );
};

export default LandingPage;
