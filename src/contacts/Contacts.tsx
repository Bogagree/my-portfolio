import React, {useEffect, useRef, useState} from 'react';
import style from './Contacts.module.scss'
import SiteButton from "../common/Components/Buttons/Site.Button";
import {Title} from '../common/Components/Title/Title';
import {Footer} from '../footer/Footer';
// @ts-ignore (no type declarations for vantajs)
import NET from 'vanta/dist/vanta.net.min'
import emailjs from '@emailjs/browser'

export const Contacts = () => {

    // background animation start
    const [vantaEffect, setVantaEffect] = useState<any>(0)
    const backgroundAnimation = useRef(null)

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: backgroundAnimation.current,
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
    // background animation end

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID || '',
            process.env.REACT_APP_TEMPLATE_ID || '',
            form.current || '',
            process.env.REACT_APP_PUBLIC_KEY
        )
            .then((result) => {
                console.log(result.text)
                form.current && form.current.reset()
                alert('Your message has been sent successfully!')
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id={'contacts'} className={style.getInTouch} ref={backgroundAnimation}>

            <div className={style.container}>

                <Title text={'Get in touch'} color={'white'}/>

                <form className={style.form} ref={form} onSubmit={sendEmail}>
                    <div className={style.formWrapper}>

                        <label htmlFor="name">Name:</label>
                        <input className={style.input}
                               type="text"
                               placeholder="Your name"
                               name="user_name"
                               required
                        />

                        <label htmlFor="email">Email:</label>
                        <input className={style.input}
                               type="text"
                               placeholder="Your email"
                               name="user_email"
                               required
                        />

                        <label htmlFor="message">Message:</label>
                        <textarea className={style.textarea}
                                  placeholder="Type the message here"
                                  name="message"
                        />

                        <SiteButton className={style.sendBtn} type="submit">send</SiteButton>

                    </div>
                </form>

                <Footer/>

            </div>
        </section>
    );
};