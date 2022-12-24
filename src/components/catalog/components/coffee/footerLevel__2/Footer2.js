import React from 'react';
import logo from '../footerLevel__2/images/Logo.png';

import styles from './footer2Style.module.scss';

export default function Footer2() {
   
    return ( 
        <div className={styles.main}>
            <img src={logo} className = {styles.logo} alt="logo"/>
            <div className={styles.catalog}>Каталог товаров</div>
            <div className={styles.blog}>Блог</div>
            <div className={styles.contacts}>Контакты</div>
        </div>
    );
}