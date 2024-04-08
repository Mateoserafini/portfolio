import React from 'react';
import { basics } from '../../data/cv.json';
import MailIcon from "../../assets/mail.svg";
import PhoneIcon from "../../assets/phone.svg";
import style from './Contact.module.css'

const SKILLS_ICONS = {
    Mail: MailIcon,
    Phone:PhoneIcon
};

export const Contact = () => {
    return (
        <footer className={style.footerHeader}>
            <ul className={style.ulHeader}>
                <li className={style.liHeader}><img className={style.heroIcons} src={MailIcon} alt="Icono Correo" /><a href="">{basics.email}</a></li>
                <li className={style.liHeader}><img className={style.heroIcons} src={PhoneIcon} alt="Icono Correo" /><a href="">{basics.phone}</a></li>
            </ul>
        </footer>
    );
};
