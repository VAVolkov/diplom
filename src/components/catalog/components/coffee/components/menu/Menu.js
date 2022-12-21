import React from 'react';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './menuStyle.module.scss';
import cupAndBeans from './images/cupAndBeans.png';
import itemCoffee from '../../../../../main/products/components/sliderProducts/components/images/itemCoffee.png';

export default function Menu() {
    const [line, setLine] = useState(0);
    const [bg, setBg] = useState([styles.checkInactive,styles.checkInactive,styles.checkInactive,styles.checkInactive,styles.checkInactive]);
    useEffect(()=>{     
                    let tmpArrayBg = bg;
                    for (let i = 0; i < tmpArrayBg.length; i++) {
                        if (i === (line-1)) {
                                            tmpArrayBg[i] = styles.checkActive;
                                        }
                        else {
                                tmpArrayBg[i] = styles.checkInactive;
                            }
                    }
                    setBg(tmpArrayBg);
                    //setBg(...bg, bg[line-1] = styles.checkActive);

                    console.log(bg);
    },[line])
    
     
    return ( 
        <div className={styles.main}>
            <div className={styles.comments}>Хлебные крошки</div>
            <img src={cupAndBeans} className = {styles.cupAndBeans} alt="Picture"/>
            <div className={styles.label}>Свежеобжаренный кофе</div>

            <div className={styles.roasting}>
                <h3 className={styles.labelRoasting}>Степень обжарки</h3>
                <div className={styles.strip__1} />
                <div className={classNames(styles.checkRoasting__1, bg[0])} onClick = {() => {setLine(1)}} />
                <div className={styles.boxOfLine__1}>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                </div>
                <div className={classNames(styles.checkRoasting__2, bg[1])} onClick = {() => {setLine(2)}} />
                <div className={styles.boxOfLine__2}>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                </div>
                <div className={classNames(styles.checkRoasting__3, bg[2])} onClick = {() => {setLine(3)}} />
                <div className={styles.boxOfLine__3}>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                </div>
                <div className={classNames(styles.checkRoasting__4, bg[3])} onClick = {() => {setLine(4)}} />
                <div className={styles.boxOfLine__4}>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                </div>
                <div className={classNames(styles.checkRoasting__5, bg[4])} onClick = {() => {setLine(5)}} />
                <div className={styles.boxOfLine__5}>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                </div>
            </div>

            <div className={styles.boxMenu__2}>
                <div className={styles.strip__2} />
                <h3 className={styles.geography}>География</h3>
                <div className={classNames(styles.checkGeography__1, bg[0])} onClick = {() => {setLine(1)}} />
                <div className={styles.box__1__line__1}>
                    <h5 className = {styles.geographyItem} alt="bean"/>
                    
                </div>

                <h3 className={styles.sourness}>Кислинка</h3>


                <h3 className={styles.special}>Особые</h3>


                <h3 className={styles.typeCoffee}>Вид кофе</h3>


                <h3 className={styles.typeHandling}>Способ <br/> обработки</h3>


            </div>


        </div>
    ); 
} 