import React from 'react';
import style from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";
import SiteButton from "../common/buttons/Site.Button";

const Contacts = () => {
    return (
        <div className={styleContainer.container}>
            <h2 className={style.title}>Get in touch_</h2>
            <div className={style.formWrapper}>
                <form action="">

                    <div><input className={style.input} type="text" placeholder="Your name"></input></div>

                    <div><input className={style.input} type="text" placeholder="Your email"></input></div>

                    <div><textarea className={style.textarea} placeholder="Type the message here"></textarea></div>

                    <SiteButton>send</SiteButton>
                </form>
            </div>

        </div>
    );
};

export default Contacts;