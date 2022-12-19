import React from 'react';
import poster from '../news/images/poster.png';
import styles from './newsStyle.module.scss';

export default function News() {
   
    return ( 
        <div className={styles.main}>
            <div className={styles.readAll}>Читать все</div>
            <div className={styles.label}>Новости компании</div>
            <div className={styles.card__1}>
                <img src={poster} className = {styles.poster} alt="poster"/>
                <h1 className={styles.cardLabel__1}>Танзанийский кофе. Откуда он взялся <br/> и почему мы его так любим?</h1>
                <h4 className={styles.cardText__1}>Танзания – красивая африканская страна. <br/> Именно здесь расположены 
                                                легендарные <br/> географические объекты – вулкан <br/> Килиманджаро и озеро 
                                                Виктория. <br/> <br/> Но наш интерес вызван не столько природными <br/> красотами, 
                                                сколько кофе...
                </h4>
                <div className={styles.details__1}>Подробнее</div>
            </div>
            <div className={styles.card__2}>
                <h1 className={styles.cardLabel__2}>Африканский кофе Кения АА</h1>
                <h4 className={styles.cardText__2}>Кения АА – у этого кофе, из африканской <br/> страны, репутация одного из самых
                                                 вкусных <br/> и ярких сортов в мире. Многие обжарщики <br/> высоко оценивают местные 
                                                 разновидности <br/> высокогорной арабики.
                </h4>
                <div className={styles.details__2}>Подробнее</div>
            </div>
            <div className={styles.card__3}>
                <h1 className={styles.cardLabel__2}>Африканский кофе Кения АА</h1>
                <h4 className={styles.cardText__2}>Кения АА – у этого кофе, из африканской <br/> страны, репутация одного из самых
                                                 вкусных <br/> и ярких сортов в мире. Многие обжарщики <br/> высоко оценивают местные 
                                                 разновидности <br/> высокогорной арабики.
                </h4>
                <div className={styles.details__2}>Подробнее</div>
            </div>
            <div className={styles.card__4}>
                <img src={poster} className = {styles.poster} alt="poster"/>
                <h1 className={styles.cardLabel__1}>Танзанийский кофе. Откуда он взялся <br/> и почему мы его так любим?</h1>
                <h4 className={styles.cardText__1}>Танзания – красивая африканская страна. <br/> Именно здесь расположены 
                                                легендарные <br/> географические объекты – вулкан <br/> Килиманджаро и озеро 
                                                Виктория. <br/> <br/> Но наш интерес вызван не столько природными <br/> красотами, 
                                                сколько кофе...
                </h4>
                <div className={styles.details__1}>Подробнее</div>
            </div>
            <div className={styles.bg}></div>
        </div>
    );
} 