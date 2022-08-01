import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={styleContainer.container}>
            <p>mobile: +7-928-611-42-84</p>
            <p>whatsapp: +66-84-562-85-77</p>
            <p>2022 Dmitry Bogatirev. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;