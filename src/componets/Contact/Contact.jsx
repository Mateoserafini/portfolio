import React from 'react';
import { basics } from '../../data/cv.json';
import MailIcon from "../../assets/mail.svg";
import LinkedInIcon from "../../assets/linkedin.svg";
import GitHubIcon from "../../assets/github.svg";

const SKILLS_ICONS = {
    Mail: MailIcon,
    LinkedIn: LinkedInIcon,
    GitHub: GitHubIcon
};

export const Contact = () => {
    return (
        <section>
            <ul>
                <li><img src={MailIcon} alt="Icono Correo" />{basics.email}</li>
                <li>{basics.phone}</li>
                {basics.profiles.map(profile => (
                    <li key={profile.network}>
                        <img src={SKILLS_ICONS[profile.network]} alt={profile.network} />
                        <a href={profile.url} target="_blank" rel="noopener noreferrer">
                            {profile.network}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};
