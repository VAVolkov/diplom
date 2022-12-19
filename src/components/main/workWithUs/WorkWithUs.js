import React from 'react';
import iconCup from '../workWithUs/image/iconCup.png';
import iconArrow from '../workWithUs/image/iconArrow.png';
import iconHuman from '../workWithUs/image/iconHuman.png';
import cupWithCoffee from '../workWithUs/image/cupWithCoffee.png';

import styles from './workWithUsStyle.module.scss';


export default function WorkWithUs() {
   
    return ( 
        <div className={styles.main}>
            <a className={styles.viewAll}>Смотреть все</a>
            <div className={styles.answer}>Почему стоит работать <br/> именно с нами?</div>
            <img src={iconCup} className = {styles.iconCup} alt="icon"/>
                <div className={styles.labelIconCup}>Всегда свежая обжарка</div>
                <div className={styles.textIconCup}>Подбор степени обжарки под каждый <br/> сорт кофе. Всегда свежая обжарка</div>
            <img src={iconArrow} className = {styles.iconArrow} alt="icon"/>
                <div className={styles.labelIconArrow}>Лучшие цены на продукцию</div>
                <div className={styles.textIconArrow}>Благодаря крупным объемам производства <br/> мы даем лучшие цены на нашу продукцию</div>
            <img src={iconHuman} className = {styles.iconHuman} alt="icon"/>
                <div className={styles.labelIconHuman}>Консультации 24/7</div>
                <div className={styles.textIconHuman}>Наши специалисты готовы всегда помочь <br/> и подсказать вам с выбором кофе или <br/> другой продукции</div>
            <img src={cupWithCoffee} className = {styles.cupWithCoffee} alt="Cup with coffee"/>

        </div>
    );
} 