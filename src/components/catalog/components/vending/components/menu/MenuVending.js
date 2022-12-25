import React from 'react';
import styles from './menuVendingStyle.module.scss';
import coffee_machine from './images/coffee_machine.png';
import card from './images/card.png';

import CardMenuVending from './components/CardMenuVending';

export default function MenuVending() {
 
    return ( 
        <div className={styles.main}>
            <div className={styles.comments}>Главная Каталог товаров Чай и кофейные напитки</div>
            <img src={coffee_machine} className = {styles.coffee_machine} alt="Picture"/>
            <div className={styles.label}>Продукция для вендинга</div>
            <div className={styles.menuBox}>
                
                <div className={styles.firstLine}>
                    <CardMenuVending image = {card} label = {'Гранулированный кофе'}/>
                    <CardMenuVending image = {card} label = {'Гранулированный цикорий'}/>
                    <CardMenuVending image = {card} label = {'Зерновой кофе'}/>
                </div>
                <div className={styles.secondLine}>
                    <CardMenuVending image = {card} label = {'Гранулированный какао'}/>
                    <CardMenuVending image = {card} label = {`Гранулированные кофейные напитки`}/>
                    <CardMenuVending image = {card} label = {'Кофе порошкообразный'}/>
                    <CardMenuVending image = {card} label = {'Сухое молоко гранулированное'}/>
                </div>      
            </div>            
        </div>
    ); 
} 