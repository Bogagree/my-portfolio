import React from 'react';
import {MainUp} from './MainUp/MainUp';
import style from './Main.module.scss';
import {MainDown} from './MainDown/MainDown';

export const Main = () => {
    return (
        <section className={style.main}>
            <div className={style.container}>
                <MainUp/>
                <MainDown/>
            </div>
        </section>
    )
        ;
};