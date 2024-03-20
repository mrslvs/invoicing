import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
    return (
        <article className="home-content">
            <h1>NamenameName</h1>
            <main className="">
                Welcome personal project NamenameName, a fullstack application build with modern
                technologies (MySQL, ExpressJS, ReactJS + NodeJS). This application allows user to
                view invoices and perform CRUD operations upon them.
            </main>

            <footer>
                Made by
                <div className="">
                    <div>
                        <a href="#" className="">
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
