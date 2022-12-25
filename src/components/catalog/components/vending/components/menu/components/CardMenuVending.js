import React from 'react';
import styles from './cardMenuVendingStyle.module.scss';

export default function CardMenuVending({image, label}) {
 
    return ( 
        <div className={styles.main}>
         
            <img src={image} className = {styles.image} alt="Picture"/>
            <div className={styles.label}>{label}</div>

        </div>
    ); 
} 