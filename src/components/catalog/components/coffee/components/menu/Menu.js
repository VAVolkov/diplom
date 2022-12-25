import React from 'react';
import { useState, useEffect } from 'react';
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
    const [line, setLine] = useState(0);
    const [bg, setBg] = useState([styles.checkInactive,styles.checkInactive,styles.checkInactive,styles.checkInactive,styles.checkInactive]);
    
    const check = (stateBg,checkLine) =>{
        let tmpArrayBg = stateBg;
        for (let i = 0; i < tmpArrayBg.length; i++) {
            if (i === (checkLine-1)) {tmpArrayBg[i] = styles.checkActive;}
            else {tmpArrayBg[i] = styles.checkInactive;}
        }
        return(tmpArrayBg);
    };
    
    useEffect(()=>{     
                    setBg(check(bg, line));
                    console.log(bg);
                    //setBg(...bg, bg[line-1] = styles.checkActive);
                    //console.log(bg);
    },[line, bg])
  
    //География
    const [lineGeography, setLineGeography] = useState(0);
    const [bgGeography, setBgGeography] = useState([styles.checkInactive,styles.checkInactive,styles.checkInactive,
                                                    styles.checkInactive,styles.checkInactive,styles.checkInactive,styles.checkInactive]);
    useEffect(()=>{     
                    setBgGeography(check(bgGeography,lineGeography));
                    console.log(bgGeography);
    },[lineGeography])

    //Кислинка
    const [lineSourness, setLineSourness] = useState(0);
    const [bgSourness, setBgSourness] = useState([styles.checkInactive,styles.checkInactive,styles.checkInactive]);
    useEffect(()=>{     
                    setBgSourness(check(bgSourness,lineSourness));
                    console.log(bgSourness);
    },[lineSourness])

    //Особые
    const [lineSpecial, setLineSpecial] = useState(0);
    const [bgSpecial, setBgSpecial] = useState([styles.checkInactive,styles.checkInactive,styles.checkInactive,
                                                    styles.checkInactive,styles.checkInactive,styles.checkInactive,styles.checkInactive]);
    useEffect(()=>{     
                    setBgSpecial(check(bgSpecial,lineSpecial));
                    console.log(bgSpecial);
    },[lineSpecial])
    
    //Вид кофе
    const [lineTypeCoffee, setLineTypeCoffee] = useState(0);
    const [bgTypeCoffee, setBgTypeCoffee] = useState([styles.checkInactive,styles.checkInactive,styles.checkInactive,styles.checkInactive]);
    useEffect(()=>{     
                    setBgTypeCoffee(check(bgTypeCoffee,lineTypeCoffee));
                    console.log(bgTypeCoffee);
    },[lineTypeCoffee])

    //Способ обработки 
    const [lineTypeHandling, setlineTypeHandling] = useState(0);
    const [bgTypeHandling, setBgTypeHandling] = useState([styles.checkInactive,styles.checkInactive,styles.checkInactive]);
    useEffect(()=>{     
                    setBgTypeHandling(check(bgTypeHandling,lineTypeHandling));
                    console.log(bgTypeHandling);
    },[lineTypeHandling])


    return ( 
        <div className={styles.main}>
            <div className={styles.comments}>Главная Каталог товаров Свежеобжаренный кофе </div>
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
                <div className = {styles.geographyBox}>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgGeography[0])} onClick = {() => {setLineGeography(1)}} /> 
                        <div className={styles.checkLabel}>Африка</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check,bgGeography[1])} onClick = {() => {setLineGeography(2)}} /> 
                        <div className={styles.checkLabel}>Йемен</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgGeography[2])} onClick = {() => {setLineGeography(3)}} /> 
                        <div className={styles.checkLabel}>Уганда</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgGeography[3])} onClick = {() => {setLineGeography(4)}} /> 
                        <div className={styles.checkLabel}>Эфиопия</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgGeography[4])} onClick = {() => {setLineGeography(5)}} /> 
                        <div className={styles.checkLabel}>Азия</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgGeography[5])} onClick = {() => {setLineGeography(6)}} /> 
                        <div className={styles.checkLabel}>Центр. Америка</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgGeography[6])} onClick = {() => {setLineGeography(7)}} /> 
                        <div className={styles.checkLabel}>Лат. Америка</div>
                    </div>
                </div>
                                
                <h3 className={styles.sourness}>Кислинка</h3>
                <div className = {styles.sournessBox}>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgSourness[0])} onClick = {() => {setLineSourness(1)}} /> 
                        <div className={styles.checkLabel}>Низкая</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check,bgSourness[1])} onClick = {() => {setLineSourness(2)}} /> 
                        <div className={styles.checkLabel}>Средняя</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgSourness[2])} onClick = {() => {setLineSourness(3)}} /> 
                        <div className={styles.checkLabel}>Высокая</div>
                    </div>
                </div>

                <h3 className={styles.special}>Особые</h3>
                <div className = {styles.specialBox}>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgSpecial[0])} onClick = {() => {setLineSpecial(1)}} /> 
                        <div className={styles.checkLabel}>Популярное</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check,bgSpecial[1])} onClick = {() => {setLineSpecial(2)}} /> 
                        <div className={styles.checkLabel}>Новый урожай</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgSpecial[2])} onClick = {() => {setLineSpecial(3)}} /> 
                        <div className={styles.checkLabel}>Ваш выбор</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgSpecial[3])} onClick = {() => {setLineSpecial(4)}} /> 
                        <div className={styles.checkLabel}>Микролот</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgSpecial[4])} onClick = {() => {setLineSpecial(5)}} /> 
                        <div className={styles.checkLabel}>Сорт недели</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgSpecial[5])} onClick = {() => {setLineSpecial(6)}} /> 
                        <div className={styles.checkLabel}>Скидки</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgSpecial[6])} onClick = {() => {setLineSpecial(7)}} /> 
                        <div className={styles.checkLabel}>Новинка</div>
                    </div>
                </div>

                <h3 className={styles.typeCoffee}>Вид кофе</h3>
                <div className = {styles.typeCoffeeBox}>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgTypeCoffee[0])} onClick = {() => {setLineTypeCoffee(1)}} /> 
                        <div className={styles.checkLabel}>Арабика</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgTypeCoffee[1])} onClick = {() => {setLineTypeCoffee(2)}} /> 
                        <div className={styles.checkLabel}>Робуста</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgTypeCoffee[2])} onClick = {() => {setLineTypeCoffee(3)}} /> 
                        <div className={styles.checkLabel}>Смесь орабик</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgTypeCoffee[3])} onClick = {() => {setLineTypeCoffee(4)}} /> 
                        <div className={styles.checkLabel}>Смесь арабика/рабуста</div>
                    </div>
                </div>

                <h3 className={styles.typeHandling}>Способ <br/> обработки</h3>
                <div className = {styles.typeHandlingBox}>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgTypeHandling[0])} onClick = {() => { setlineTypeHandling(1)}} /> 
                        <div className={styles.checkLabel}>Сухая</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check,bgTypeHandling[1])} onClick = {() => { setlineTypeHandling(2)}} /> 
                        <div className={styles.checkLabel}>Мытая</div>
                    </div>
                    <div className = {styles.checkBoxLine}>
                        <div className={classNames(styles.check, bgTypeHandling[2])} onClick = {() => { setlineTypeHandling(3)}} /> 
                        <div className={styles.checkLabel}>Прочие</div>
                    </div>
                </div>
            </div>
            <div className={styles.cardsBox}>
                <div className={styles.card}>
                    <h5>Турка</h5>
                    <img src={pic_01} className = {styles.pic} alt="pic"/>
                </div>
                <div className={styles.card}>
                    <h5>Френч-пресс</h5>
                    <img src={pic_02} className = {styles.pic} alt="pic"/>
                </div>
                <div className={styles.card}>
                    <h5>Мока</h5>
                    <img src={pic_03} className = {styles.pic} alt="pic"/>
                </div>
                <div className={styles.card}>
                    <h5>Эспрессо</h5>
                    <img src={pic_04} className = {styles.pic} alt="pic"/>
                </div>
                <div className={styles.card}>
                    <h5>Воронка</h5>
                    <img src={pic_05} className = {styles.pic} alt="pic"/>
                </div>
                <div className={styles.card}>
                    <h5>Аэропресс</h5>
                    <img src={pic_06} className = {styles.pic} alt="pic"/>
                </div>
                <div className={styles.card}>
                    <h5>Чашка</h5>
                    <img src={pic_07} className = {styles.pic} alt="pic"/>
                </div>
                <div className={styles.card}>
                    <h5>Автомат</h5>
                    <img src={pic_08} className = {styles.pic} alt="pic"/>
                </div>
            </div>



        </div>
    ); 
} 