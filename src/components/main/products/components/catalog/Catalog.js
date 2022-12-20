import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './catalogStyle.module.scss';
import coffee from '../../../products/components/catalog/images/coffee.png';
import cereal from '../../../products/components/catalog/images/cereal.png';
import teapot from '../../../products/components/catalog/images/teapot.png';
import coffee_mashine from '../../../products/components/catalog/images/coffee_mashine.png';


export default function Catalog() {
  
    const [displayBtn1, setDisplayBtn1] = useState(styles.btnCloseShow);
    const mouthOn1 = () => {setDisplayBtn1(styles.btn);}
    const mouthLeave1 = () => {setDisplayBtn1(styles.btnCloseShow);}
    const [displayBtn2, setDisplayBtn2] = useState(styles.btnCloseShow);
    const mouthOn2 = () => {setDisplayBtn2(styles.btn);}
    const mouthLeave2 = () => {setDisplayBtn2(styles.btnCloseShow);}
    const [displayBtn3, setDisplayBtn3] = useState(styles.btnCloseShow);
    const mouthOn3 = () => {setDisplayBtn3(styles.btn);}
    const mouthLeave3 = () => {setDisplayBtn3(styles.btnCloseShow);}
    const [displayBtn4, setDisplayBtn4] = useState(styles.btnCloseShow);
    const mouthOn4 = () => {setDisplayBtn4(styles.btn);}
    const mouthLeave4 = () => {setDisplayBtn4(styles.btnCloseShow);}

    return ( 
        <>
            <div className={styles.title}>Каталоги нашей продукции</div>
            <div className={styles.catalogItems}>
                <div className={styles.item} onMouseOver = {mouthOn1} onMouseLeave = {mouthLeave1}>
                    <img src={coffee} className = {styles.imageCoffee} alt=""/>
                    <div className={styles.titleCoffee}>Свежеобжаренный кофе</div>
                    <Link to = "/catalogCoffee" className={displayBtn1}>Купить</Link>
                </div>
                <div className={styles.item} onMouseOver = {mouthOn2} onMouseLeave = {mouthLeave2}>
                    <img src={teapot} className = {styles.imageTeapot} alt=""/>
                    <div className={styles.titleTeapot}>Чай и кофейные напитки</div>
                    <Link to = "/catalogTea" className={displayBtn2}>Купить</Link>
                </div>
                <div className={styles.item} onMouseOver = {mouthOn3} onMouseLeave = {mouthLeave3}>
                    <img src={coffee_mashine} className = {styles.imageCoffeeMashine} alt=""/>
                    <div className={styles.titleCoffeeMashine}>Продукты для <br/> вендинга</div>
                    <Link to = "/catalogVending" className={displayBtn3}>Купить</Link>
                </div>
                <div className={styles.item} onMouseOver = {mouthOn4} onMouseLeave = {mouthLeave4}>
                    <img src={cereal} className = {styles.imageCereal} alt=""/>
                    <div className={styles.titleCereal}>Здоровое питание</div>
                    <Link to = "/catalogHelthFood" className={displayBtn4}>Купить</Link>
                </div>
            </div>
        </>
    ); 
} 