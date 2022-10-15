import React from 'react';
import style from './Nav.module.scss'
import {Link} from 'react-scroll';

const header: string[] = [
    'main', 'resume', 'skills', 'projects', 'testimonials', 'contacts'
]

export const Nav = () => {
    return (
        <nav className={style.nav}>

            {header.map(h => {
                return <Link
                    smooth
                    key={h}
                    to={h}
                    className={style.link}
                >{h}</Link>
            })}

        </nav>
    );
};