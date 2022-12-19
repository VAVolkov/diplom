import React from 'react';
import cup from '../subscription/images/cup.png';

import styles from './subscriptionStyle.module.scss';

export default function Subscription() {
   
    return ( 
        <div className={styles.main}>
            <div className={styles.label}>Подписка на новости и рассылку</div>
            <div className={styles.text}>Подпишитесь на нашу рассылку прямо сейчас и будьте в <br/> курсе новых поставок, скидок и эксклюзивных предложений.</div>
            <div className={styles.email}> <h5 className={styles.emailText}>Ваш email </h5> </div>
            <div className={styles.btn}>Подписаться</div>
            <img src={cup} className = {styles.cup} alt="cup"/>
            <div className={styles.footer}>Нажимая на кнопку “Подписаться”, вы принимаете правила <span className={styles.textYellow}> пользовательского соглашения </span> </div>
        </div>
    );
}