import React from 'react';
import style from './ResumeList.module.scss';
import {ResumeListTitle} from '../ResumeListTitle/ResumeListTitle';
import {ExperienceBlockType, ResumeListBlock} from '../ResumeListBlock/ResumeListBlock';

type ResumeListPropsType = {
    listTitle: string
    items: ExperienceBlockType[]
}

export const ResumeList: React.FC<ResumeListPropsType> = ({listTitle,items}) => {
    return (
        <div className={style.resumeList}>

            <ResumeListTitle title={listTitle}/>
            {
                items.map(e =>
                    <ResumeListBlock
                        title={e.title}
                        period={e.period}
                        description={e.description}
                        position={e.position}
                    />
                )
            }
        </div>
    );
};