import React from 'react';
// import { useState, useEffect } from 'react';
// import classNames from 'classnames';
import styles from './cardMenuTeaStyle.module.scss';



export default function CardMenuTea({image, label}) {
 
    return ( 
        <div className={styles.main}>
         
            <img src={image} className = {styles.image} alt="Picture"/>
            <div className={styles.label}>{label}</div>

        </div>
    ); 
} 