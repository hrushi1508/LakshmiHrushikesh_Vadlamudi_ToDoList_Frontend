import React from "react";
import { useNavigate } from "react-router-dom";
import './landing.css'; // Make sure to create this file

function Landing() {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/login');
    };

    return (
        <div className="landing-container">
            <h1 className="landing-title">Welcome to TaskMate</h1>
            <p className="landing-subtitle">
                Your simple and powerful to-do list app. Manage your tasks, track progress, and boost productivity.
            </p>
            <button className="landing-button" onClick={handleStart}>
                Get Started
            </button>
        </div>
    );
}

export default Landing;
