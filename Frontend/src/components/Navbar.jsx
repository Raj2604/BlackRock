import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Navbar.css';
import logo from '../assets/logo.png'
const Navbar = () => {
    const { isAuthenticated, logout } = useAuth();
    const [scrolled, setScrolled] = useState(false);

    const handleLogout = () => {
        logout();
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-left">
                <Link to="/"><img src={logo} alt="/" className='logo' /></Link>
                   
                </div>
                <div className="navbar-right">
                    <div className="navbar-links">
                        {!isAuthenticated ? (
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Sign Up</Link>
                            </>
                        ) : (
                            <>
                                <Link to="/report">Report</Link> {/* Update to point to /report */}
                                <Link to="/portfolio">Portfolio</Link> {/* Portfolio button */}
                                <button className='subodh' onClick={handleLogout}>Logout</button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
