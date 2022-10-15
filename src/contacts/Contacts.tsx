import React from 'react';
import style from './Contacts.module.scss'
import SiteButton from "../common/Components/Buttons/Site.Button";
import {Title} from '../common/Components/Title/Title';
import {Footer} from '../footer/Footer';

const Contacts = () => {
    return (
        <section id={'contacts'} className={style.container}>

            <div className={style.getInTouch}>

                <Title text={'Get in touch'} color={'white'}/>

                <form>
                    <div className={style.formWrapper}>
                        <input className={style.input} type="text" placeholder="Your name"></input>
                        <input className={style.input} type="text" placeholder="Your email"></input>
                        <textarea className={style.textarea} placeholder="Type the message here"></textarea>
                        <SiteButton className={style.sendBtn}>send</SiteButton>
                    </div>

                </form>
                <Footer/>
            </div>
        </section>
    );
};

export default Contacts;