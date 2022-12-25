import React from 'react';
// import { useState, useEffect } from 'react';
// import classNames from 'classnames';
import styles from './menuHealthFoodStyle.module.scss';
import helthFood from './images/helthFood.png';
import imageCard from './images/imageCard.png';
import CardMenuHealthFood from './components/CardMenuHealthFood';

export default function MenuHealthFood() {
 
    return ( 
        <div className={styles.main}>
            <div className={styles.comments}>Главная Каталог товаров Чай и кофейные напитки</div>
            <img src={helthFood} className = {styles.helthFood} alt="Picture"/>
            <div className={styles.label}>Здоровое питание</div>
            <div className={styles.menuBox}>
                
                <div className={styles.firstLine}>
                    <CardMenuHealthFood image = {imageCard} label = {'Цикорий и корень цикория'}/>
                    <CardMenuHealthFood image = {imageCard} label = {'Ячменные напитки'}/>
                    
                </div>
                <div className={styles.secondLine}>
                    <CardMenuHealthFood image = {imageCard} label = {'Напитки для здоровья'}/>
                    <CardMenuHealthFood image = {imageCard} label = {'Протеиновые смеси'}/>
                    <CardMenuHealthFood image = {imageCard} label = {'Толокняные каши'}/>
                </div>      
            </div>            
        </div>
    ); 
} 