import React from 'react';
import icon from '../weInInstagram/images/icon.png';
import phones from '../weInInstagram/images/phones.png';
import rectangle from '../weInInstagram/images/rectangle.png';
import arrowRight from '../weInInstagram/images/arrowRight.png';
import styles from './weInInstagramStyle.module.scss';

export default function WeInInstagram() {
   
    return ( 
        <div className={styles.main}>
            <div className={styles.label}>Мы в Instagram</div>
            <img src={icon} className = {styles.icon} alt="icon"/>
            <img src={phones} className = {styles.phones} alt="phones"/>
            <img src={rectangle} className = {styles.rectangle__1} alt="rectangle"/>
            <img src={rectangle} className = {styles.rectangle__2} alt="rectangle"/>
            <img src={rectangle} className = {styles.rectangle__3} alt="rectangle"/>
            <img src={rectangle} className = {styles.rectangle__4} alt="rectangle"/>
            <img src={rectangle} className = {styles.rectangle__5} alt="rectangle"/>
            <img src={rectangle} className = {styles.rectangle__6} alt="rectangle"/>
            <img src={arrowRight} className = {styles.arrowRight} alt="arrowRight"/>
            <div className={styles.bg}></div>
        </div>
    );
}