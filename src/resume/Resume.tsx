import React from 'react';
import styleContainer from '../common/styles/Container.module.css';
import styleWrapper from '../common/styles/Wrapper.module.css';
import {Title} from '../common/Components/Title/Title';

export const Resume = () => {
    return (
        <div className={styleWrapper.wrapper}>

            <div className={styleContainer.container}>

                <Title text={'Resume'}/>

            </div>

        </div>
    )
        ;
};