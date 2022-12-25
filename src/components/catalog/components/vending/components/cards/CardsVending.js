import React from 'react';
//import SlideProducts from '../../../../../main/products/components/sliderProducts/components/SlideProducts';
import styles from './cardsVendingStyle.module.scss';
import CardVending from './card/CardVending';
import image from './image/image.png';


export default function CardsVending() {
   
    return ( 
        <div className={styles.main}>
            <h3>Сортировка</h3>
            <div className={styles.cardGrid}>
                <CardVending image = {image}/>
                <CardVending image = {image}/>
                <CardVending image = {image}/>
                <CardVending image = {image}/>

                <CardVending image = {image}/>
                <CardVending image = {image}/>
                <CardVending image = {image}/>
                <CardVending image = {image}/>

                <CardVending image = {image}/>
                <CardVending image = {image}/>
                <CardVending image = {image}/>
                <CardVending image = {image}/>
            </div>
            <div className={styles.btn}>Показать еще</div>
        </div>
    ); 
} 