
import React from 'react';
import './Resume.css'; 
const Resume = () => {
    return (
        <div className="resume-container">
            <header className="header">
                <h1>Deeksha S</h1>
                <p>Assistant Professor | deeksha@gmail.com | 1234567890</p>
            </header>

            <section className="section">
                <h2>Education</h2>
                <p>Master of Computer Science - Mount Carmel College</p>
                <p>Graduated: 2022</p>
            </section>

            <section className="section">
                <h2>Experience</h2>
                <p>Assistant Professor (2022 - Present)</p>
                <ul>
                    <li>Developed web applications using React and Node.js</li>
                    <li>Optimized application performance, reducing load time by 30%</li>
                </ul>
            </section>

            <section className="section">
                <h2>Skills</h2>
                <ul>
                    <li>React, JavaScript, HTML, CSS</li>
                    <li>Node.js, Express, MongoDB</li>
                    <li>Git, Docker</li>
                </ul>
            </section>

            <footer>
                Designed by Deeksha S | <a href="mailto:deeksha@gmail.com">Contact Me</a>
            </footer>
        </div>
    );
};

export default Resume;
