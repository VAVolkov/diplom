import React from 'react';
import { useState } from 'react';
import styles from './cardStyle.module.scss';

import itemProducts from '../../../images/itemProducts.png';
import starOn from '../../../images/starOn.png';
import starOff from '../../../images/starOff.png';
import discountImage from './images/discounts.png';

export default function Card({discount}) {
   
    const [massa, setMassa] = useState('250г.');
    const [selectorStatus, setSelectorStatus] = useState(styles.closeShow);
    // const [starStatus, setStarStatus] = useState(styles.stars);
    // const [gradeStatus, setGradeStatus] = useState(styles.grade);
    // const [feedbackStatus, setFeedbackStatus] = useState(styles.feedback);

    const openSelector = () => {
        setSelectorStatus(styles.massSelector__wrapper);
    }
    const closeSelector = () => {
        setSelectorStatus(styles.closeShow);
    }
    const sel = ">";

    return ( 
        <div className={styles.main}>

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
            <div className={styles.stars}>
                <img src={starOn} className = {styles.imageStar} alt="star"/>
                <img src={starOn} className = {styles.imageStar} alt="star"/>
                <img src={starOn} className = {styles.imageStar} alt="star"/>
                <img src={starOn} className = {styles.imageStar} alt="star"/>
                <img src={starOff} className = {styles.imageStar} alt="star"/>
            </div>
            <div className={styles.grade}>4.0</div>
            <div className={styles.feedback}>(32 отзыва)</div>

            <img src={itemProducts} className = {styles.imageMain} alt="картинка"/>
            <img src={discountImage} className = {discount?styles.discount:styles.noShow} alt="скидки"/>

            <div className={styles.name}>Наименование товара</div>
            <div className={styles.label}>Черный чай</div>
            <div className={styles.priceOld}> 350 ₽ </div>
            <div className={styles.priceNew}> 250 ₽ </div>
            <div className={styles.btnToBin}>В корзину</div>

        </div>
    ); 
} 