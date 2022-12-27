import React from 'react';
import SlideProducts from '../../../../../main/products/components/sliderProducts/components/SlideProducts';
import styles from './cardsStyle.module.scss';



export default function Cards() {
   
    return ( 
        <div className={styles.main}>
            <h3>Сортировка</h3>
            <div className={styles.cardGrid}>
                <SlideProducts />
                <SlideProducts />
                <SlideProducts className={styles.phoneStyle} discount = {true}/>
                <SlideProducts />

                <SlideProducts className={styles.phoneStyle}/>
                <SlideProducts className={styles.phoneStyle}/>
                <SlideProducts className={styles.phoneStyle}/>
                <SlideProducts className={styles.phoneStyle}/>

                <SlideProducts className={styles.phoneStyle}/>
                <SlideProducts className={styles.phoneStyle}/>
                <SlideProducts className={styles.phoneStyle}/>
                <SlideProducts className={styles.phoneStyle}/>
            </div>
            <div className={styles.btn}>Показать еще</div>
        </div>
    ); 
} 