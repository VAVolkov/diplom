import React from 'react';
import SliderBox from './components/slider/SliderBox';
import Catalog from './components/catalog/Catalog';
import SliderProducts from './components/sliderProducts/SliderProducts'
import bernsCoffee from '../../../components/main/products/images/coffeeBean.png';

import styles from './productsStyle.module.scss';


export default function Products() {
   
    return ( 
    <div className={styles.main}>
        <SliderBox />
        <Catalog />
        <SliderProducts />

        <img src={bernsCoffee} className = {styles.image} alt=""/>
        
    </div>
    ); 
} 