import React from 'react';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './menuStyle.module.scss';
import cupAndBeans from './images/cupAndBeans.png';
import itemCoffee from '../../../../../main/products/components/sliderProducts/components/images/itemCoffee.png';

export default function Menu() {
   
    const [checkStatus, setCheckStatus] = useState(false);
    const [bg, setBg] = useState(styles.checkInactive);
    useEffect(()=>{(checkStatus)?setBg(styles.checkInactive):setBg(styles.checkActive);},[checkStatus])
    const check = () => {setCheckStatus(!checkStatus)};




    return ( 
        <div className={styles.main}>
            <div className={styles.comments}>Хлебные крошки</div>
            <img src={cupAndBeans} className = {styles.image} alt="Picture"/>
            <div className={styles.label}>Свежеобжаренный кофе</div>
            <div className={styles.roasting}>
                <h3 className={styles.labelRoasting}>Степень обжарки</h3>
                <div className={styles.strip__1} />
                <div className={classNames(styles.checkRoasting__1, bg)} onClick = {check}></div>
                <div className={styles.boxOfLine__1}>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                </div>
                <div className={styles.checkRoasting__2}></div>
                <div className={styles.boxOfLine__2}>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                </div>
                <div className={styles.checkRoasting__3}></div>
                <div className={styles.boxOfLine__3}>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                </div>
                <div className={styles.checkRoasting__4}></div>
                <div className={styles.boxOfLine__4}>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                </div>
                <div className={styles.checkRoasting__5}></div>
                <div className={styles.boxOfLine__5}>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                </div>


            </div>
        </div>
    ); 
} 