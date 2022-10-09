import React from 'react';
import {MainDown} from './MainDown/MainDown';
import {MainUp} from './MainUp/MainUp';
import styleContainer from '../common/styles/Container.module.css';

export const Main = () => {
    return (
        <div >
            <div className={styleContainer.container}>
                <MainUp/>
                <MainDown/>
            </div>
        </div>
    );
};