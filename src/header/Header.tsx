import React, {useEffect, useState} from 'react';
import style from './Header.module.scss'
import {Nav} from "./nav/Nav";

export const Header = () => {

    const [position, setPosition] = useState(window.scrollY)
    const [visible, setVisible] = useState(true)

    useEffect(()=> {
        const handleScroll = () => {
            let moving = window.scrollY

            setVisible(position > moving);
            setPosition(moving)
        };
        window.addEventListener("scroll", handleScroll);
        return(() => {
            window.removeEventListener("scroll", handleScroll);
        })
    })

    const cls = visible ? `${style.visible}` :  `${style.hidden}`;

    return (
        <header className={`${style.header}  ${cls}`}>
            <div className={style.container}>
                <Nav/>
            </div>
        </header>
    );
};