import React from 'react';
import style from './Nav.module.scss'

const header: string[] = [
    'main', 'resume','skills', 'projects', 'testimonials', 'contacts'
]

export const Nav = () => {
    return (
        <nav className={style.nav}>

            {header.map(h => {
                return <a key={h} href={'#' + h}>{h}</a>
            })}

        </nav>
    );
};