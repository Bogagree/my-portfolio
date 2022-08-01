import React from 'react';
import style from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";
import SiteButton from "../common/buttons/Site.Button";

const Contacts = () => {
    return (
        <div className={styleContainer.container}>
            <h2 className={style.title}>Get in touch_</h2>
                <form action="">
                    <div className={style.formWrapper}>
                        <input className={style.input} type="text" placeholder="Your name"></input>
                        <input className={style.input} type="text" placeholder="Your email"></input>
                        <textarea className={style.textarea} placeholder="Type the message here"></textarea>
                        <SiteButton className={style.sendBtn}>send</SiteButton>
                    </div>

                </form>


        </div>
    );
};

export default Contacts;