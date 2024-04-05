import React from 'react';
import { basics } from '../../data/cv.json';
import MailIcon from "../../assets/mail.svg";
import LinkedInIcon from "../../assets/linkedin.svg";
import GitHubIcon from "../../assets/github.svg";
import PhoneIcon from "../../assets/phone.svg";
import style from './Contact.module.css'

const SKILLS_ICONS = {
    Mail: MailIcon,
    LinkedIn: LinkedInIcon,
    GitHub: GitHubIcon,
    Phone:PhoneIcon
};

export const Contact = () => {
    return (
        <footer className={style.footerHeader}>
            <ul className={style.ulHeader}>
                <li className={style.liHeader}><img className={style.heroIcons} src={MailIcon} alt="Icono Correo" />{basics.email}</li>
                <li className={style.liHeader}><img className={style.heroIcons} src={PhoneIcon} alt="Icono Correo" />{basics.phone}</li>
                {basics.profiles.map(profile => (
                <li className={style.liHeader}  key={profile.network}>
                    <img className={style.heroIcons} src={SKILLS_ICONS[profile.network]} alt={profile.network} />
                    <a href={profile.url} target="_blank" rel="noopener noreferrer">
                        {profile.network}
                    </a>
                </li>
                ))}
            </ul>
        </footer>
    );
};
