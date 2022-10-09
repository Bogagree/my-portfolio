import React from 'react';
import style from './SocialLinks.module.css';

const socials = ['git', 'Li', 'fb', 'I', 'VK', 'Zen']

export const SocialLinks = () => {

    return (
        <div className={style.social}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            {socials.map(s => <a href='#'>{s}</a>)}
        </div>
    );
};