import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../../assets/styles/home/about.css';

const About = () => {
    return (
        <article
            className="home-content home-content-about
        "
        >
            <h1 className="home-about-h1">NamenameName</h1>
            <main className="home-about-main">
                Welcome personal project NamenameName, a fullstack application build with modern
                technologies (MySQL, ExpressJS, ReactJS + NodeJS). This application allows user to
                view invoices and perform CRUD operations upon them.
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
