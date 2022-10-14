import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
    return (
        <article className="Content about-section">
            <h1>NamenameName</h1>
            <main>
                Welcome personal project NamenameName, a fullstack application build with modern
                technologies (MySQL, ExpressJS, ReactJS + NodeJS). This application allows user to
                view invoices and perform CRUD operations upon them.
            </main>
            <footer>
                <div>
                    Made by{' '}
                    <a href="#" className="about-link">
                        mrslvs
                    </a>
                    <br />
                    <a href="#" className="about-link about-link-logo ">
                        <FaLinkedin />
                    </a>
                    <a href="#" className="about-link about-link-logo marle">
                        <FaGithub />
                    </a>
                </div>
            </footer>
        </article>
    );
};

export default About;
