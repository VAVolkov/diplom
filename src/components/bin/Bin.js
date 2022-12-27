import React from 'react';
import MainHeader from '../main/header/MainHeader';
import SubscriptionBin from './components/subscriptionBin/SubscriptionBin';
import FooterBin from './components/footerBin/FooterBin';
import x from './images/x.png';
import pictureProducts from './images/pictureProducts.png';

import styles from './binStyle.module.scss';


export default function Bin() {
   
    return ( 
        <div className={styles.main}>
            <MainHeader />
            <div className={styles.binConstructor}>
                <div className={styles.comments}>Главная Корзина </div>
                <div className={styles.binPlace}>
                <div className={styles.productsCountLabel}>2 товара в корзине </div>
                <div className={styles.btnDeleteAll}> Удалить все </div>
                <div className={styles.deleteProducts}> Удалить товар </div>    
                <div className={styles.nameProducts}> Наименование товара </div>
                <div className={styles.priceProducts}> Цена </div>
                <div className={styles.quantityProducts}> Количество </div>
                <div className={styles.discountProducts}> Скидка (10%) </div>
                <div className={styles.totalOfProducts}> Итого </div>
                <ul>
                    <li>
                        <img src={x} className = {styles.btnDeleteOne} alt="x"/>
                        <div className={styles.card}>
                            <img src={pictureProducts} className = {styles.picture} alt="pic"/>
                            <div className={styles.cardInfo}>
                                <div className={styles.nameCurrentProducts}> Columbia Supremo </div>
                                <div className={styles.textOfCurrentProducts}> Мытая, натуральная, смесь  </div>
                                <div className={styles.massaProducts}> 250г.  </div>
                             </div>
                        </div>
                        <div className={styles.price}> 270 ₽  </div>
                        <div className={styles.counter}>
                            <div className={styles.minus}>-</div>
                            <div className={styles.valueCounter}>1</div>
                            <div className={styles.plus}>+</div>
                        </div>
                        <div className={styles.discount}> 27 ₽ </div>
                        <div className={styles.totalValue}> 243 ₽  </div>
                    </li>
                    <li>
                        <img src={x} className = {styles.btnDeleteOne} alt="x"/>
                        <div className={styles.card}>
                            <img src={pictureProducts} className = {styles.picture} alt="pic"/>
                            <div className={styles.cardInfo}>
                                <div className={styles.nameCurrentProducts}> Columbia Supremo </div>
                                <div className={styles.textOfCurrentProducts}> Мытая, натуральная, смесь  </div>
                                <div className={styles.massaProducts}> 250г.  </div>
                             </div>
                        </div>
                        <div className={styles.price}> 270 ₽  </div>
                        <div className={styles.counter}>
                            <div className={styles.minus}>-</div>
                            <div className={styles.valueCounter}>1</div>
                            <div className={styles.plus}>+</div>
                        </div>
                        <div className={styles.discount}> 27 ₽ </div>
                        <div className={styles.totalValue}> 243 ₽  </div>
                    </li>
                </ul>
                </div>
                <div className={styles.deliveryBox}> 
                
                
                </div>
                <div className={styles.promocod}> 
                
                
                </div>
                <div className={styles.bankPayment}> 
                
                
                </div>


            </div>
            <SubscriptionBin className={styles.subscription}/>
            <FooterBin className={styles.footer}/>
        </div>
        
    );
} 