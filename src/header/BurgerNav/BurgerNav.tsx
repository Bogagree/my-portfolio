import React from 'react';
import style from './BurgetNav.module.scss'
import {Link} from 'react-scroll';

const header: string[] = [
    'main', 'resume', 'skills', 'projects', 'testimonials', 'contacts'
]

export const BurgerNav = () => {
    return (
        <nav className={style.burgerNav}>

            {header.map(h => {
                return <Link
                    smooth
                    key={h}
                    to={h}
                    className={style.link}
                    activeClass={style.active}
                >{h}</Link>
            })}

        </nav>
    );
};