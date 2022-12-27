import React from 'react';
import { useState } from 'react';
import styles from './slideProducts.module.scss';
import itemCoffee from './images/itemCoffee.png';
import itemProducts from './images/itemProducts.png';
import starOn from './images/starOn.png';
import starOff from './images/starOff.svg';
import discountImage from './images/discounts.png';

export default function SlideProducts({discount}) {
   
    const [massa, setMassa] = useState('250г.');
    const [selectorStatus, setSelectorStatus] = useState(styles.closeShow);
    const [starStatus, setStarStatus] = useState(styles.stars);
    const [gradeStatus, setGradeStatus] = useState(styles.grade);
    const [feedbackStatus, setFeedbackStatus] = useState(styles.feedback);

    const openSelector = () => {
        setSelectorStatus(styles.massSelector__wrapper);
        setStarStatus(styles.closeShow);
        setGradeStatus(styles.closeShow);
        setFeedbackStatus(styles.closeShow);
    }
    const closeSelector = () => {
        setSelectorStatus(styles.closeShow);
        setStarStatus(styles.stars);
        setGradeStatus(styles.grade);
        setFeedbackStatus(styles.feedback);
    }
    const sel = ">";

    return ( 
        <div className={styles.cardProducts}>

            <div className={styles.massSelector} onMouseLeave = {closeSelector}>
                <div className={styles.firstLine} onMouseOver = {openSelector}>
                    <h3 className={styles.positionMassStart}> {massa} </h3>
                    <div className={styles.btnSelect}>{sel}</div>
                </div>
                <div className={selectorStatus}>
                    <div className={styles.massSelector__list}>
                        <h4 className={styles.positionMass} onClick = {() => setMassa('100г.')}> 100г.</h4>
                        <h4 className={styles.positionMass} onClick = {() => setMassa('250г.')}> 250г.</h4>
                        <h4 className={styles.positionMass} onClick = {() => setMassa('500г.')}> 500г.</h4>
                        <h4 className={styles.positionMass} onClick = {() => setMassa('1000г.')}> 1000г.</h4>
                    </div>
                </div>
            </div>

            <div className={styles.discounts}> Скидки </div>
            <div className={styles.discounts_tablet}> Популярное <br/> Новый урожай </div>
            <img src={itemProducts} className = {styles.imageMain} alt="картинка"/>
            <img src={discountImage} className = {discount?styles.discount:styles.noShow} alt="скидки"/>
            <div className={starStatus}>
                <img src={starOn} className = {styles.imageStar} alt="star"/>
                <img src={starOn} className = {styles.imageStar} alt="star"/>
                <img src={starOn} className = {styles.imageStar} alt="star"/>
                <img src={starOn} className = {styles.imageStar} alt="star"/>
                <img src={starOff} className = {styles.imageStar} alt="star"/>
            </div>
            <div className={gradeStatus}>4.0</div>
            <div className={feedbackStatus}>(32 отзыва)</div>
            <div className={styles.coffeBeans}>
                <img src={itemCoffee} className = {styles.imageCoffeBeans} alt="coffeBean"/>
                <img src={itemCoffee} className = {styles.imageCoffeBeans} alt="coffeBean"/>
                <img src={itemCoffee} className = {styles.imageCoffeBeans} alt="coffeBean"/>
                <img src={itemCoffee} className = {styles.imageCoffeBeans} alt="coffeBean"/>
                <img src={itemCoffee} className = {styles.imageCoffeBeans} alt="coffeBean"/>
            </div>
            <div className={styles.sourness}> Кислинка </div>
            <div className={styles.gradeBarSourness}>
                <div className={styles.pointOn}></div>
                <div className={styles.pointOn}></div>
                <div className={styles.pointOn}></div>
                <div className={styles.pointOn}></div>
                <div className={styles.pointOn}></div>
                <div className={styles.pointOn}></div>
                <div className={styles.pointOn}></div>
                <div className={styles.pointOff}></div>
                <div className={styles.pointOff}></div>
                <div className={styles.pointOff}></div>
            </div>
            <div className={styles.bitterness}> Горчинка </div>
            <div className={styles.gradeBarBitterness}>
            <div className={styles.pointOn}></div>
                <div className={styles.pointOn}></div>
                <div className={styles.pointOn}></div>
                <div className={styles.pointOn}></div>
                <div className={styles.pointOn}></div>
                <div className={styles.pointOn}></div>
                <div className={styles.pointOn}></div>
                <div className={styles.pointOff}></div>
                <div className={styles.pointOff}></div>
                <div className={styles.pointOff}></div>
            </div>
            <div className={styles.saturation}> Насыщенность </div>
            <div className={styles.gradeBarSaturation}>
            <div className={styles.pointOn}></div>
                <div className={styles.pointOn}></div>
                <div className={styles.pointOn}></div>
                <div className={styles.pointOn}></div>
                <div className={styles.pointOn}></div>
                <div className={styles.pointOn}></div>
                <div className={styles.pointOn}></div>
                <div className={styles.pointOff}></div>
                <div className={styles.pointOff}></div>
                <div className={styles.pointOff}></div>
            </div>
            <div className={styles.coffeeName}>Colombia Supremo</div>
            <div className={styles.coffeeLabel}>Свежеобжаренный кофе -<br/> описание товара, вкус, аромат</div>
            <div className={styles.priceOld}> 350 ₽ </div>
            <div className={styles.priceNew}> 250 ₽ </div>
            <div className={styles.btnToBin}>В корзину</div>

        </div>
    ); 
} 