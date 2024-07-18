import React from 'react';
import { Link } from 'react-router-dom';
import './Edu.css'; // Import your CSS file for Edu page
import YouTubeVideos from './YouTubeVideos'; // Import your YouTubeVideos component
import logo from '../assets/logo.png'
const Edu = () => {
    return (
        <div className="edu-page">
            <header className="navbar">
                <div className="container">
                <div className="navbar-left">
                <Link to="/"><img src={logo} alt="/" className='logo' /></Link>
                   
                </div>
                    <nav className="navbar-links">
                        <Link to="/">Home</Link>
                        <Link to="/edu">About ESG</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Sign Up</Link>
                    </nav>
                </div>
            </header>

            <section className="edu-section">
                <div className="container2">
                    <h1>About ESG</h1>
                    <p>
                        ESG stands for Environmental, Social, and Governance. It refers to the three central factors
                        in measuring the sustainability and societal impact of an investment in a company or business.
                        These criteria help to better determine the future financial performance of companies
                        (return and risk).
                    </p>
                    <p>
                        <strong>Environmental:</strong> This criteria examines how a company performs as a steward of the natural environment.
                        This may include a company’s energy use, waste, pollution, natural resource conservation, and treatment of animals.
                    </p>
                    <p>
                        <strong>Social:</strong> This criteria looks at the company’s business relationships. Does it work with suppliers that
                        hold the same values as it claims to hold? Does the company donate a percentage of its profits to the local community
                        or encourage employees to perform volunteer work there? Do the company’s working conditions show high regard for its
                        employees’ health and safety? Are other stakeholders’ interests considered?
                    </p>
                    <p>
                        <strong>Governance:</strong> This criteria deals with a company’s leadership, executive pay, audits, internal controls, and
                        shareholder rights. Investors may want to know that a company uses accurate and transparent accounting methods and that
                        stockholders are allowed to vote on important issues.
                    </p>
                </div>
            </section>

            {/* YouTube Videos Section */}
            <section className="youtube-videos-section">
                <div className="container">
                    <h2>Related Videos</h2>
                    <YouTubeVideos />
                </div>
            </section>
        </div>
    );
};

export default Edu;
