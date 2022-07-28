import React from 'react';
import style from './Header.module.css'
import {Nav} from "../nav/Nav";
import styleContainer from './../common/styles/Wrapper.module.css'

const Header = () => {
    return (
        <div className={style.header}>
            <div className={styleContainer.wrapper}>
                <Nav/>
            </div>

        </div>
    );
};

export default Header;