import React from 'react';
import style from './Footer.module.css'
import {SocialLinks} from '../common/Components/SocialLinks/SocialLinks';

export const Footer = () => {
    return (
            <footer className={style.footer}>
                <SocialLinks/>
                <p>2022 Dmitry Bogatyrev. All Rights Reserved</p>
            </footer>
    );
};
