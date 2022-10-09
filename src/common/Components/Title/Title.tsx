import React from 'react';
import style from './Title.module.css'

type TitlePropsType = {
    text: string
}

export const Title: React.FC<TitlePropsType> = ({text}) => {
    return (
        <>
            <h2 className={style.title}>{text}</h2>
        </>
    );
};
