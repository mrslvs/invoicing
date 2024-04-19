import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
    return (
        <article className="home-content">
            <h1 className="home-about-logo">NamenameName</h1>
            <main className="home-about-main">
                Welcome to my personal project NamenameName, a fullstack application build with
                modern technologies (MySQL, ExpressJS, ReactJS + NodeJS). This application allows
                user to create and edit invoices.
            </main>

            <footer className="home-about-footer">
                <div className="home-about-link-container">
                    <a href="#" className="about-link home-animated-hover">
                        mrslvs
                    </a>
                </div>
                <div className="home-about-link-container">
                    <a
                        href="https://www.linkedin.com/in/miroslav-sekerka/"
                        className="about-link home-animated-hover"
                    >
                        <FaLinkedin className="home-about-icon" />
                    </a>
                </div>
                <div className="home-about-link-container">
                    <a href="https://github.com/mrslvs" className="about-link home-animated-hover">
                        <FaGithub className="home-about-icon" />
                    </a>
                </div>
            </footer>
        </article>
    );
};

export default About;
