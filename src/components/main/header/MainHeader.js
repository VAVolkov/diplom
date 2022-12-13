import React from 'react';
import logo from '../header/image/logo.png';
import bin from '../header/image/bin.png';
import login from '../header/image/login.png';
import search from '../header/image/search.png';
import styles from './mainHeaderStyle.module.scss';

export default function MainHeader() {
   
    console.log(styles);
    console.log(logo);

    return ( 
    <div className={styles.mainHeader}>
        <img src={logo} className = {styles.imageLogo} alt="Логотип"/>
        
        <div className={styles.catalogTovarov}>Каталог товаров</div>
        <div className={styles.blog}>Блог</div>
        <div className={styles.contacts}>Контакты</div>
        
        <img src={search} className = {styles.imageSearch} alt="Поиск"/>
        <img src={bin} className = {styles.imageBin} alt="Корзина"/>
        <img src={login} className = {styles.imageLogin} alt="Вход"/>

    </div>
    ); 
} 