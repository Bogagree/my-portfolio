import React, {useState} from 'react';
import style from './BurgetNav.module.scss'
import {Link} from 'react-scroll';
import Hamburger from 'hamburger-react'

const header: string[] = [
    'main', 'resume', 'skills', 'projects', 'testimonials', 'contacts'
]

export const BurgerNav = () => {

    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const burgerMenuClass = menuIsOpen ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems

    return (
        <nav className={style.burgerNav}>

            <div className={burgerMenuClass}>
                {header.map(h => {
                    return <Link
                        smooth
                        key={h}
                        to={h}
                        className={style.link}
                        activeClass={style.active}
                    >{h}</Link>
                })}
            </div>

            <div className={style.burgerBtn}>
                <Hamburger
                    toggled={menuIsOpen}
                    toggle={setMenuIsOpen}
                    color="#a9c96a"
                    distance={'lg'}
                />
            </div>


        </nav>
    );
};