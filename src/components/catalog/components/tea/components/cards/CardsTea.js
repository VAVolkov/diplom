import React from 'react';
//import SlideProducts from '../../../../../main/products/components/sliderProducts/components/SlideProducts';
import styles from './cardsTeaStyle.module.scss';
import Card from './card/Card';



export default function CardsTea() {
   
    return ( 
        <div className={styles.main}>
            <h3>Сортировка</h3>
            <div className={styles.cardGrid}>
                <Card discount = {false}/>
                <Card discount = {false}/>
                <Card discount = {false}/>
                <Card discount = {true}/>

                <Card discount = {false}/>
                <Card discount = {false}/>
                <Card discount = {false}/>
                <Card discount = {true}/>

                <Card discount = {false}/>
                <Card discount = {false}/>
                <Card discount = {false}/>
                <Card discount = {true}/>
            </div>
            <div className={styles.btn}>Показать еще</div>
        </div>
    ); 
} 