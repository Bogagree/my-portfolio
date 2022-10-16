import React, {useEffect, useRef, useState} from 'react';
import style from './Contacts.module.scss'
import SiteButton from "../common/Components/Buttons/Site.Button";
import {Title} from '../common/Components/Title/Title';
import {Footer} from '../footer/Footer';
// @ts-ignore (no type declarations for vantajs)
import NET from 'vanta/dist/vanta.net.min'

export const Contacts = () => {

    const [vantaEffect, setVantaEffect] = useState<any>(0)
    const myRef = useRef(null)

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                points: 14.00,
                maxDistance: 30.00,
                spacing: 30.00,
                scaleMobile: 1.00,
                color: '#a9c96a',
                backgroundColor: '#7766a1'
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    return (
        <section id={'contacts'} className={style.getInTouch} ref={myRef}>

            <div className={style.container}>

                <Title text={'Get in touch'} color={'white'}/>

                <form className={style.form}>
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