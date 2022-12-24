import React from 'react';
// import { useState, useEffect } from 'react';
// import classNames from 'classnames';
import styles from './menuTeaStyle.module.scss';
import teapot from './images/teapot.png';
import card1 from './images/card_01.png';
import card2 from './images/card_02.png';
import card3 from './images/card_03.png';
import card4 from './images/card_04.png';
import CardMenuTea from './components/CardMenuTea';

export default function MenuTea() {
 
    return ( 
        <div className={styles.main}>
            <div className={styles.comments}>Хлебные крошки</div>
            <img src={teapot} className = {styles.teapot} alt="Picture"/>
            <div className={styles.label}>Чай и кофейные напитки</div>
            <div className={styles.menuBox}>
                
                <div className={styles.firstLine}>
                    <CardMenuTea image = {card1} label = {'Черный чай'}/>
                    <CardMenuTea image = {card2} label = {'Зеленый чай'}/>
                    <CardMenuTea image = {card4} label = {'Молочный улунг'}/>
                </div>
                <div className={styles.secondLine}>
                    <CardMenuTea image = {card1} label = {'Травяной чай'}/>
                    <CardMenuTea image = {card2} label = {'Матча'}/>
                    <CardMenuTea image = {card4} label = {'Пуэр'}/>
                    <CardMenuTea image = {card3} label = {'Кофейные напитки'}/>
                </div>      
            </div>            
        </div>
    ); 
} 