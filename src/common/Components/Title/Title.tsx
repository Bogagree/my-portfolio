import React from 'react';
import style from './Title.module.scss'
import Typewriter from 'typewriter-effect';

type TitlePropsType = {
    text: string
    color?: string
}

export const Title: React.FC<TitlePropsType> = ({text, color = '#555'}) => {
    return (
        <>
            <h2 className={style.title} style={{color: color}}>
                <Typewriter
                    options={{
                        cursor: '_'
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString(`${text } `)
                            .pauseFor(50)
                            .deleteChars(1)
                            .start()
                    }}
                />
            </h2>
        </>
    );
};
