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
                Made by{' '}
                <div className="grid-container">
                    <div>
                        <a href="#" className="about-link">
                            mrslvs
                        </a>
                    </div>
                    <div>
                        <a
                            href="https://www.linkedin.com/in/miroslav-sekerka/"
                            className="about-link "
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/mrslvs" className="about-link ">
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </footer>
        </article>
    );
};

export default About;
