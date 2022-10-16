import React from 'react';
import style from './Header.module.scss'
import {Nav} from './Nav/Nav'
import {BurgerNav} from './BurgerNav/BurgerNav';


export const Header = () => {

    return (
        <header className={style.header}>
            <div className={style.container}>
                <Nav/>
                <BurgerNav/>
            </div>
        </header>
    );
};