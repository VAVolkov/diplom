import React from 'react';
import logo from '../footerContacts/images/Logo.png';
import { Link } from 'react-router-dom';
import styles from './footerContactsStyle.module.scss';

export default function FooterContacts() {
   
    return ( 
        <div className={styles.main}>
            <Link to="/"> <img src={logo} className = {styles.logo} alt="Логотип"/></Link>
            <div className={styles.catalog}>Каталог товаров</div>
            <div className={styles.blog}>Блог</div>
            <div className={styles.contacts}>Контакты</div>
        </div>
    );
}