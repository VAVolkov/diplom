import React from 'react';
import logo from '../header/image/logo.png';
import styles from './mainHeaderStyle.module.scss';

export default function MainHeader() {
   
    console.log(styles);
    console.log(logo);

    return ( 
    <div className={styles.mainHeader}>
        <img src={logo} className = {styles.image} alt=""/>
        
        <div className={styles.catalogTovarov}>Каталог товаров</div>
        <div className={styles.blog}>Блог</div>
        <div className={styles.contacts}>Контакты</div>
        

    </div>
    ); 
} 