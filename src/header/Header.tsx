import React, {useEffect, useState} from 'react';
import style from './Header.module.scss'
import {Nav} from "./nav/Nav";

export const Header = () => {

    const [header, setHeader] = useState(true)

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setHeader(window.scrollY < 100)
            );
        }
    }, []);

    const cls = header ? `${style.visible}` : `${style.hidden}`;

    return (
        <header className={`${style.header}  ${cls}`}>
            <div className={style.container}>
                <Nav/>
            </div>
        </header>
    );
};