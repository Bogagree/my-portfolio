import React from 'react';
import {MainDown} from './MainDown/MainDown';
import {MainUp} from './MainUp/MainUp';
import style from './Main.module.css';

export const Main = () => {
    return (
        <div className={style.main}>
            <div className={style.backGroundWrapper}>
                <MainUp/>
            </div>
                <MainDown/>
        </div>
    );
};