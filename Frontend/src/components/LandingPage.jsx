import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import your landing page styles here
import landingImage from '../assets/color.jpg'; // Update with the correct image path
import overlayImage from '../assets/img.webp'; // Update with the correct overlay image path

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header className="navbar">
                <div className="container">
                    <div className="navbar-logo">
                        <Link to="/">MyApp</Link> {/* Replace with your logo or site name */}
                    </div>
                    <nav className="navbar-links">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Sign Up</Link>
                    </nav>
                </div>
            </header>

            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <h1>Welcome to MyApp</h1>
                        <p>Unlock your world with our amazing features.</p>
                        <Link to="/register" className="btn btn-primary">Get Started</Link> {/* Link to your registration page */}
                    </div>
                </div>
            </section>

            <section className="background-image-section">
                <img src={landingImage} className="landing-background-image" alt="Landing" />
                <img src={overlayImage} className="landing-overlay-image" alt="Overlay" />
            </section>

            <section id="features" className="features-section">
                <div className="container">
                    <div className="feature">
                        <h2>Feature 1</h2>
                        <p>Description of Feature 1.</p>
                    </div>
                    <div className="feature">
                        <h2>Feature 2</h2>
                        <p>Description of Feature 2.</p>
                    </div>
                    <div className="feature">
                        <h2>Feature 3</h2>
                        <p>Description of Feature 3.</p>
                    </div>
                </div>
            </section>

            <section id="about" className="about-section">
                <div className="container">
                    <h2>About Us</h2>
                    <p>Brief description about your company or product.</p>
                </div>
            </section>

            <section id="contact" className="contact-section">
                <div className="container">
                    <h2>Contact Us</h2>
                    <p>Contact information and form can go here.</p>
                </div>
            </section>

            <Link to="/chatbot" className="chatbot-button">
               
            </Link>

            <footer className="footer">
                <div className="container">
                    <p>&copy; 2024 MyApp. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
