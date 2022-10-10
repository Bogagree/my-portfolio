import React from 'react';
import style from './Title.module.css'

type TitlePropsType = {
    text: string
    color?: string
}

export const Title: React.FC<TitlePropsType> = ({text, color = '#555'}) => {
    return (
        <>
            <h2 className={style.title} style={{color: color}}>{text}</h2>
        </>
    );
};
