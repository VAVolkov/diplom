import React from 'react';
import SlideProducts from '../../../../../main/products/components/sliderProducts/components/SlideProducts';
import styles from './cardsTeaStyle.module.scss';


export default function CardsTea() {
   
    return ( 
        <div className={styles.main}>
            <h3>Сортировка</h3>
            <div className={styles.cardGrid}>
                <SlideProducts />
                <SlideProducts />
                <SlideProducts />
                <SlideProducts />

                <SlideProducts />
                <SlideProducts />
                <SlideProducts />
                <SlideProducts />

                <SlideProducts />
                <SlideProducts />
                <SlideProducts />
                <SlideProducts />
            </div>
            <div className={styles.btn}>Показать еще</div>
        </div>
    ); 
} 