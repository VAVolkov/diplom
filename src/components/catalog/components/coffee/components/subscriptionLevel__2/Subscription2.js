import React from 'react';
import cup from '../subscriptionLevel__2/images/cup.png';

import styles from './subscription2Style.module.scss';

export default function Subscription2() {
   
    return ( 
        <div className={styles.main}>
            <div className={styles.label}>Подписка на новости и рассылку</div>
            <div className={styles.text}>Подпишитесь на нашу рассылку прямо сейчас и будьте в <br/> курсе новых поставок, скидок и эксклюзивных предложений.</div>
            <div className={styles.email}>
                <form>
                    <input type="text" name="text" defaultValue="Ваш email" className={styles.emailText} /> 
                </form>
            </div>
            <div className={styles.btn}>Подписаться</div>
            <img src={cup} className = {styles.cup} alt="cup"/>
            <div className={styles.footer}>Нажимая на кнопку “Подписаться”, вы принимаете правила <span className={styles.textYellow}> пользовательского соглашения </span> </div>
        </div>
    );
}