import React from 'react';
//import SlideProducts from '../../../../../main/products/components/sliderProducts/components/SlideProducts';
import styles from './cardsHealthFoodStyle.module.scss';
import CardHealthFood from './card/CardHealthFood';
import imageCard from './image/imageCard.png';


export default function CardsHealthFood() {
   
    return ( 
        <div className={styles.main}>
            <h3>Сортировка</h3>
            <div className={styles.cardGrid}>
                <CardHealthFood image={imageCard} discount = {false}/>
                <CardHealthFood image={imageCard} discount = {false}/>
                <CardHealthFood image={imageCard} discount = {false}/>
                <CardHealthFood image={imageCard} discount = {true}/>

                <CardHealthFood image={imageCard} discount = {false}/>
                <CardHealthFood image={imageCard} discount = {false}/>
                <CardHealthFood image={imageCard} discount = {false}/>
                <CardHealthFood image={imageCard} discount = {true}/>

                <CardHealthFood image={imageCard} discount = {false}/>
                <CardHealthFood image={imageCard} discount = {false}/>
                <CardHealthFood image={imageCard} discount = {false}/>
                <CardHealthFood image={imageCard} discount = {true}/>
            </div>
            <div className={styles.btn}>Показать еще</div>
        </div>
    ); 
} 