import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div className="affiliations">
                <a href="https://github.com/your-github-profile">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://twitter.com/your-twitter-profile">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://www.linkedin.com/in/your-linkedin-profile">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
