import React from 'react';
import styles from './catalogCoffeeStyle.module.scss';
import MainHeader from '../../../main/header/MainHeader';
import Menu from './components/menu/Menu';
//import cupWithCoffee from '../../../images/cupWithCoffee.png';

export default function CatalogCoffee() {
   
    return ( 
        <div className={styles.main}>
            <MainHeader />
            <Menu />
        
        </div>
    ); 
} 