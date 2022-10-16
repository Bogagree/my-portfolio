import React, {useEffect, useRef, useState} from 'react';
import {MainUp} from './MainUp/MainUp';
import style from './Main.module.scss';
import {MainDown} from './MainDown/MainDown';
// @ts-ignore (no type declarations for vantajs)
import NET from 'vanta/dist/vanta.net.min'
import {Header} from '../header/Header';

export const Main = () => {

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
                spacing: 20.00,
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
        <section id={'main'} className={style.main} ref={myRef}>

            <div className={style.container}>
                <Header/>
                <MainUp/>
                <MainDown/>
            </div>

        </section>
    );
};