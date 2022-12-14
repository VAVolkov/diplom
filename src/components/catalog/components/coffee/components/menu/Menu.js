import React from 'react';
import { useState} from 'react';
import classNames from 'classnames';
import styles from './menuStyle.module.scss';
import cupAndBeans from './images/cupAndBeans.png';
import itemCoffee from '../../../../../main/products/components/sliderProducts/components/images/itemCoffee.png';

import pic_01 from './images/pic_01.png';
import pic_02 from './images/pic_02.png';
import pic_03 from './images/pic_03.png';
import pic_04 from './images/pic_04.png';
import pic_05 from './images/pic_05.png';
import pic_06 from './images/pic_06.png';
import pic_07 from './images/pic_07.png';
import pic_08 from './images/pic_08.png';


export default function Menu() {
    const bg__0 = [styles.checkInactive,styles.checkInactive,styles.checkInactive,styles.checkInactive,styles.checkInactive];
    const bg__1 = [styles.checkActive,styles.checkInactive,styles.checkInactive,styles.checkInactive,styles.checkInactive];
    const bg__2 = [styles.checkInactive,styles.checkActive,styles.checkInactive,styles.checkInactive,styles.checkInactive];
    const bg__3 = [styles.checkInactive,styles.checkInactive,styles.checkActive,styles.checkInactive,styles.checkInactive];
    const bg__4 = [styles.checkInactive,styles.checkInactive,styles.checkInactive,styles.checkActive,styles.checkInactive];
    const bg__5 = [styles.checkInactive,styles.checkInactive,styles.checkInactive,styles.checkInactive,styles.checkActive];
    
    const bgGeography__0 = [styles.checkInactive,styles.checkInactive,styles.checkInactive,styles.checkInactive,styles.checkInactive,styles.checkInactive,styles.checkInactive];
    const bgGeography__1 = [styles.checkActive,styles.checkInactive,styles.checkInactive,styles.checkInactive,styles.checkInactive,styles.checkInactive,styles.checkInactive];
    const bgGeography__2 = [styles.checkInactive,styles.checkActive,styles.checkInactive,styles.checkInactive,styles.checkInactive,styles.checkInactive,styles.checkInactive];
    const bgGeography__3 = [styles.checkInactive,styles.checkInactive,styles.checkActive,styles.checkInactive,styles.checkInactive,styles.checkInactive,styles.checkInactive];
    const bgGeography__4 = [styles.checkInactive,styles.checkInactive,styles.checkInactive,styles.checkActive,styles.checkInactive,styles.checkInactive,styles.checkInactive];
    const bgGeography__5 = [styles.checkInactive,styles.checkInactive,styles.checkInactive,styles.checkInactive,styles.checkActive,styles.checkInactive,styles.checkInactive];
    const bgGeography__6 = [styles.checkInactive,styles.checkInactive,styles.checkInactive,styles.checkInactive,styles.checkInactive,styles.checkActive,styles.checkInactive];
    const bgGeography__7 = [styles.checkInactive,styles.checkInactive,styles.checkInactive,styles.checkInactive,styles.checkInactive,styles.checkInactive,styles.checkActive];

    const bgSourness__0 = [styles.checkInactive,styles.checkInactive,styles.checkInactive];
    const bgSourness__1 = [styles.checkActive,styles.checkInactive,styles.checkInactive];
    const bgSourness__2 = [styles.checkInactive,styles.checkActive,styles.checkInactive];
    const bgSourness__3 = [styles.checkInactive,styles.checkInactive,styles.checkActive];

    const bgSpecial__0 = bgGeography__0;
    const bgSpecial__1 = bgGeography__1;
    const bgSpecial__2 = bgGeography__2;
    const bgSpecial__3 = bgGeography__3;
    const bgSpecial__4 = bgGeography__4;
    const bgSpecial__5 = bgGeography__5;
    const bgSpecial__6 = bgGeography__6;
    const bgSpecial__7 = bgGeography__7;

    const bgTypeCoffee__0 = [styles.checkInactive,styles.checkInactive,styles.checkInactive,styles.checkInactive];
    const bgTypeCoffee__1 = [styles.checkActive,styles.checkInactive,styles.checkInactive,styles.checkInactive];
    const bgTypeCoffee__2 = [styles.checkInactive,styles.checkActive,styles.checkInactive,styles.checkInactive];
    const bgTypeCoffee__3 = [styles.checkInactive,styles.checkInactive,styles.checkActive,styles.checkInactive];
    const bgTypeCoffee__4 = [styles.checkInactive,styles.checkInactive,styles.checkInactive,styles.checkActive];

    const bgTypeHandling__0 = bgSourness__0 ;
    const bgTypeHandling__1 = bgSourness__1;
    const bgTypeHandling__2 = bgSourness__2;
    const bgTypeHandling__3 = bgSourness__3;

    const [bg, setBg] = useState(bg__0);
    const [bgGeography, setBgGeography] = useState(bgGeography__0);
    const [bgSourness, setBgSourness] = useState(bgSourness__0);
    const [bgSpecial, setBgSpecial] = useState(bgSpecial__0);
    const [bgTypeCoffee, setBgTypeCoffee] = useState(bgTypeCoffee__0);
    const [bgTypeHandling, setBgTypeHandling] = useState(bgTypeHandling__0);
    
    return ( 
        <div className={styles.main}>
            <div className={styles.comments}>?????????????? ?????????????? ?????????????? ?????????????????????????????? ???????? </div>
            <img src={cupAndBeans} className = {styles.cupAndBeans} alt="Picture"/>
            <div className={styles.label}>?????????????????????????????? ????????</div>

            <div className={styles.roasting}>
                <h3 className={styles.labelRoasting}>?????????????? ??????????????</h3>
                <div className={styles.strip__1} />
                <div className={classNames(styles.checkRoasting__1, bg[0])} onClick = {() => {setBg(bg__1)}} />
                <div className={styles.boxOfLine__1}>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                </div>
                <div className={classNames(styles.checkRoasting__2, bg[1])} onClick = {() => {setBg(bg__2)}} />
                <div className={styles.boxOfLine__2}>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                </div>
                <div className={classNames(styles.checkRoasting__3, bg[2])} onClick = {() => {setBg(bg__3)}} />
                <div className={styles.boxOfLine__3}>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                </div>
                <div className={classNames(styles.checkRoasting__4, bg[3])} onClick = {() => {setBg(bg__4)}} />
                <div className={styles.boxOfLine__4}>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                </div>
                <div className={classNames(styles.checkRoasting__5, bg[4])} onClick = {() => {setBg(bg__5)}} />
                <div className={styles.boxOfLine__5}>
                    <img src={itemCoffee} className = {styles.bean} alt="bean"/>
                </div>
            </div>

            <div className={styles.boxMenu__2}>
                <div className={styles.strip__2} />
                <h3 className={styles.geography}>??????????????????</h3>
                <div className = {styles.geographyBox}>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgGeography[0])} onClick = {() => {setBgGeography(bgGeography__1)}} /> 
                        <div className={styles.checkLabel}>????????????</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check,bgGeography[1])} onClick = {() => {setBgGeography(bgGeography__2)}} /> 
                        <div className={styles.checkLabel}>??????????</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgGeography[2])} onClick = {() => {setBgGeography(bgGeography__3)}} /> 
                        <div className={styles.checkLabel}>????????????</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgGeography[3])} onClick = {() => {setBgGeography(bgGeography__4)}} /> 
                        <div className={styles.checkLabel}>??????????????</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgGeography[4])} onClick = {() => {setBgGeography(bgGeography__5)}} /> 
                        <div className={styles.checkLabel}>????????</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgGeography[5])} onClick = {() => {setBgGeography(bgGeography__6)}} /> 
                        <div className={styles.checkLabel}>??????????. ??????????????</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgGeography[6])} onClick = {() => {setBgGeography(bgGeography__7)}} /> 
                        <div className={styles.checkLabel}>??????. ??????????????</div>
                    </div>
                </div>
                                
                <h3 className={styles.sourness}>????????????????</h3>
                <div className = {styles.sournessBox}>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgSourness[0])} onClick = {() => {setBgSourness(bgSourness__1)}} /> 
                        <div className={styles.checkLabel}>????????????</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check,bgSourness[1])} onClick = {() => {setBgSourness(bgSourness__2)}} /> 
                        <div className={styles.checkLabel}>??????????????</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgSourness[2])} onClick = {() => {setBgSourness(bgSourness__3)}} /> 
                        <div className={styles.checkLabel}>??????????????</div>
                    </div>
                </div>

                <h3 className={styles.special}>????????????</h3>
                <div className = {styles.specialBox}>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgSpecial[0])} onClick = {() => {setBgSpecial(bgSpecial__1)}} /> 
                        <div className={styles.checkLabel}>????????????????????</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgSpecial[1])} onClick = {() => {setBgSpecial(bgSpecial__2)}} /> 
                        <div className={styles.checkLabel}>?????????? ????????????</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgSpecial[2])} onClick = {() => {setBgSpecial(bgSpecial__3)}} /> 
                        <div className={styles.checkLabel}>?????? ??????????</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgSpecial[3])} onClick = {() => {setBgSpecial(bgSpecial__4)}} /> 
                        <div className={styles.checkLabel}>????????????????</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgSpecial[4])} onClick = {() => {setBgSpecial(bgSpecial__5)}} /> 
                        <div className={styles.checkLabel}>???????? ????????????</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgSpecial[5])} onClick = {() => {setBgSpecial(bgSpecial__6)}} /> 
                        <div className={styles.checkLabel}>????????????</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgSpecial[6])} onClick = {() => {setBgSpecial(bgSpecial__7)}} /> 
                        <div className={styles.checkLabel}>??????????????</div>
                    </div>
                </div>

                <h3 className={styles.typeCoffee}>?????? ????????</h3>
                <div className = {styles.typeCoffeeBox}>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgTypeCoffee[0])} onClick = {() => {setBgTypeCoffee(bgTypeCoffee__1)}} /> 
                        <div className={styles.checkLabel}>??????????????</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgTypeCoffee[1])} onClick = {() => {setBgTypeCoffee(bgTypeCoffee__2)}} /> 
                        <div className={styles.checkLabel}>??????????????</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgTypeCoffee[2])} onClick = {() => {setBgTypeCoffee(bgTypeCoffee__3)}} /> 
                        <div className={styles.checkLabel}>?????????? ????????????</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgTypeCoffee[3])} onClick = {() => {setBgTypeCoffee(bgTypeCoffee__4)}} /> 
                        <div className={styles.checkLabel}>?????????? ??????????????/ <br className = {styles.tabletStyle} />??????????????</div>
                    </div>
                </div>

                <h3 className={styles.typeHandling}>???????????? <br/> ??????????????????</h3>
                <div className = {styles.typeHandlingBox}>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgTypeHandling[0])} onClick = {() => {setBgTypeHandling(bgTypeHandling__1)}} /> 
                        <div className={styles.checkLabel}>??????????</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check,bgTypeHandling[1])} onClick = {() => {setBgTypeHandling(bgTypeHandling__2)}} /> 
                        <div className={styles.checkLabel}>??????????</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgTypeHandling[2])} onClick = {() => {setBgTypeHandling(bgTypeHandling__3)}} /> 
                        <div className={styles.checkLabel}>????????????</div>
                    </div>
                </div>
            </div>
            <div className={styles.cardsBox}>
                <div className={styles.card}>
                    <h5>??????????</h5>
                    <img src={pic_01} className = {styles.pic} alt="pic"/>
                </div>
                <div className={styles.card}>
                    <h5>??????????-??????????</h5>
                    <img src={pic_02} className = {styles.pic} alt="pic"/>
                </div>
                <div className={styles.card}>
                    <h5>????????</h5>
                    <img src={pic_03} className = {styles.pic} alt="pic"/>
                </div>
                <div className={styles.card}>
                    <h5>????????????????</h5>
                    <img src={pic_04} className = {styles.pic} alt="pic"/>
                </div>
                <div className={styles.card}>
                    <h5>??????????????</h5>
                    <img src={pic_05} className = {styles.pic} alt="pic"/>
                </div>
                <div className={styles.card}>
                    <h5>??????????????????</h5>
                    <img src={pic_06} className = {styles.pic} alt="pic"/>
                </div>
                <div className={styles.card}>
                    <h5>??????????</h5>
                    <img src={pic_07} className = {styles.pic} alt="pic"/>
                </div>
                <div className={styles.card}>
                    <h5>??????????????</h5>
                    <img src={pic_08} className = {styles.pic} alt="pic"/>
                </div>
            </div>



        </div>
    ); 
} 