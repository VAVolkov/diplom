import React from 'react';
import styles from './slideStyle.module.scss';
import cupWithCoffee from '../../../images/cupWithCoffee.png';

export default function Slide() {
   
    return ( 
        <div className={styles.main}>
            <div className={styles.name}>Свежеобжаренный кофе</div>
            <div className={styles.text}>Кофе Калининградской обжарки из разных стран <br/> произрастания с доставкой на дом. <br/><br/> Мы обжариваем кофе каждые выходные.</div>
            <img src={cupWithCoffee} className = {styles.image} alt="Вход"/>
            <div className={styles.btn}>Посмотреть каталог</div>
        </div>
    ); 
} 