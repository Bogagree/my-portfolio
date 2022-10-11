import React from 'react';
import style from './ResumeListTitle.module.scss'

type ResumeListTitlePropstype = {
    title: string
}

export const ResumeListTitle:React.FC<ResumeListTitlePropstype> = ({title}) => {
    return (
        <>
         <h3 className={style.resumeListTitle}>{title}</h3>
        </>
    );
};