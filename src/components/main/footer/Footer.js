import React from 'react';
import logo from '../footer/images/Logo.png';

import styles from './footerStyle.module.scss';

export default function Footer() {
   
    return ( 
        <div className={styles.main}>
            <img src={logo} className = {styles.logo} alt="logo"/>
            <div className={styles.catalog}>Каталог товаров</div>
            <div className={styles.blog}>Блог</div>
            <div className={styles.contacts}>Контакты</div>
        </div>
    );
}