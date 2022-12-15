import React from 'react';
import SliderBox from './components/slider/SliderBox';
import Catalog from './components/catalog/Catalog';
//import bg1 from '../../../components/main/products/images/bg1.png';

import styles from './productsStyle.module.scss';


export default function Products() {
   
    return ( 
    <div className={styles.main}>
        <SliderBox />
        <Catalog />


        {/* <img src={bg1} className = {styles.image} alt=""/> */}
        
    </div>
    ); 
} 