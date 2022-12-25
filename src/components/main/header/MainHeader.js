import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../header/image/logo.png';
import bin from '../header/image/bin.png';
import login from '../header/image/login.png';
import search from '../header/image/search.png';
import styles from './mainHeaderStyle.module.scss';


export default function MainHeader() {
    const [statusSearch, setStatusSearch] = useState(false);
    const [styleSearchPlace, setStyleSearchPlace] = useState(styles.closeShow);

    useEffect(()=> {
        if (statusSearch) {setStyleSearchPlace(styles.serchPlace)}
        else {setStyleSearchPlace(styles.closeShow)};
    }, [statusSearch])

    const mouthClick = () => {setStatusSearch(!statusSearch)};
   
    return ( 
    <div className={styles.mainHeader}>
        <Link to="/"> <img src={logo} className = {styles.imageLogo} alt="Логотип"/></Link>
        
        <Link to="/catalog" className={styles.catalogTovarov}>Каталог товаров</Link>
        <Link to="/blog" className={styles.blog}>Блог</Link>
        <Link to="/contacts" className={styles.contacts}>Контакты</Link>
        
        <img src={search} onClick = {mouthClick} className = {styles.imageSearch} alt="Поиск"/>
        <img src={bin} className = {styles.imageBin} alt="Корзина"/>
        <img src={login} className = {styles.imageLogin} alt="Вход"/>

        <div className={styleSearchPlace}>
            <img src={search} className = {styles.imageSearchPlace} alt="Поиск"/>
            <form>
                    <input type="text" name="text" defaultValue="Поиск по товарам" className={styles.text} /> 
            </form>
        </div>
    </div>
    ); 
} 