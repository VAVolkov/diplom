import React from 'react';
import SliderBox from './components/slider/SliderBox';

import styles from './productsStyle.module.scss';

export default function Products() {
   
    return ( 
    <div className={styles.main}>
        <SliderBox />
    </div>
    ); 
} 