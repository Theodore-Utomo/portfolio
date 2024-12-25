import React from 'react';
import './Contact.css';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    const contacts = [
        {
            name: "Github",
            link: "https://github.com/Theodore-Utomo",
            icon: <FaGithub />
        },
        {
            name: "Email",
            link: "mailto:theodoreutomo@gmail.com",
            icon: <FaEnvelope />
        }
    ];

    return (
        <footer className="contact-container">
            <div className="icons">
                {contacts.map((contact, index) => (
                    <a
                        key={index}
                        href={contact.link}
                        className="icon-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={contact.name}
                    >
                        {contact.icon}
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Contact;
