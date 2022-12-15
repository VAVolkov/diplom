import React from 'react';
import styles from './catalogStyle.module.scss';
import coffee from '../../../products/components/catalog/images/coffee.png';
import cereal from '../../../products/components/catalog/images/cereal.png';
import teapot from '../../../products/components/catalog/images/teapot.png';
import coffee_mashine from '../../../products/components/catalog/images/coffee_mashine.png';

export default function Catalog() {
   
    return ( 
        <>
            <div className={styles.title}>Каталоги нашей продукции</div>
            <div className={styles.catalogItems}>
                <div className={styles.item1}>
                    <img src={coffee} className = {styles.image} alt=""/>
                    <div className={styles.titleItems}>Свежеобжаренный кофе</div>
                    <div className={styles.btn}>Купить</div>
                </div>
                <div className={styles.item2}>
                    <img src={teapot} className = {styles.image} alt=""/>
                    <div className={styles.titleItems}>Свежеобжаренный кофе</div>
                    <div className={styles.btn}>Купить</div>
                </div>
                <div className={styles.item2}>
                    <img src={coffee_mashine} className = {styles.image} alt=""/>
                    <div className={styles.titleItems}>Свежеобжаренный кофе</div>
                    <div className={styles.btn}>Купить</div>
                </div>
                <div className={styles.item2}>
                    <img src={cereal} className = {styles.image} alt=""/>
                    <div className={styles.titleItems}>Свежеобжаренный кофе</div>
                    <div className={styles.btn}>Купить</div>
                </div>
            </div>
        </>
    ); 
} 