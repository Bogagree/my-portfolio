import React from 'react';
import style from './SocialLinks.module.scss';
import {ReactComponent as VK} from '../../../src/assets/icons/VK_Monochrome_Compact_Logo.svg';
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaTelegram} from 'react-icons/fa'
import {SiCodewars} from 'react-icons/si'

const socials = [
    {icon: AiFillGithub, link: 'https://github.com/Bogagree'},
    {icon: AiFillLinkedin, link: 'https://www.linkedin.com/in/dmitry-bogatyrev-4b679a230/'},
    {icon: AiFillFacebook, link: 'https://www.facebook.com/profile.php?id=100008122728333'},
    {icon: SiCodewars, link: 'https://www.codewars.com/users/Bogagree'},
    {icon: AiOutlineInstagram, link: 'https://www.instagram.com/bogatirev_dmitriy/'},
    {icon: VK, link: 'https://vk.com/id667993'},
    {icon: FaTelegram, link: 'https://t.me/Bogatyrev_Dim'},
]


export const SocialLinks = () => {

    return (
        <div className={style.social}>
            {socials.map(s => <a key={s.link} href={s.link} children={<s.icon/>}></a>)}
        </div>
    );
};